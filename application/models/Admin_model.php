<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Admin_model extends CI_Model
{

    public function getRoleById($id)
    {
        return $this->db->get_where('user_role', ['id' => $id])->row_array();
    }

    public function updateRole()
    {
        $data = [
            'role' => $this->input->post('role', true)
        ];
        $this->db->where('id', $this->input->post('id'));
        $this->db->update('user_role', $data);
    }

    public function delRole($id)
    {
        $this->db->delete('user_role', ['id' => $id]);
    }
}
