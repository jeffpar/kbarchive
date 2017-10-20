---
layout: page
title: "Q98555: NET MOVE, NET COPY, and File Permissions"
permalink: /kb/098/Q98555/
---

## Q98555: NET MOVE, NET COPY, and File Permissions

{% raw %}

	Article: Q98555
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	NET COPY does not copy permissions along with a file; NET MOVE does. If you want
	to keep file permissions intact on a file, use NET MOVE. If you want the file to
	have the permissions of the destination directory, use NET COPY.
	
	DEFAULT PERMISSIONS
	-------------------
	
	A file with default permissions has no explicit Access Control Lists; for
	security it uses the permissions of the directory to which it belongs. NET COPY
	copies the file to a directory, where the file is given the permissions of the
	new directory. NET MOVE moves the file and its original default permissions to a
	new directory, where the permissions are made explicit.
	
	EXPLICIT PERMISSIONS
	--------------------
	
	If files have explicit ACLs, NET COPY does not copy them when it copies the file;
	the file inherits the permissions of the destination directory. NET MOVE moves
	the permissions for the file.
	
	EXAMPLE
	-------
	
	For example, the directory C:\TEST1 has permissions USERS : RCWDAP. Two files
	exist in C:\TEST1, FILE1 and FILE2. They are using the default permissions for
	the directory. Directory C:\TEST2 has no permissions.
	
	If you use the commands
	
	  net copy c:\test1\file1 c:\test2
	  net move c:\test1\file2 c:\test2
	
	the result is that C:\TEST2\FILE1 has no permissions, and the file C:\TEST2\FILE2
	has explicit permissions of USERS : RCWDAP.
	
	If the files had explicit permissions, the end result would be the same. FILE1
	would have no permissions because it used the NET COPY command, and FILE2 would
	have the explicit permissions that it had under the old directory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
