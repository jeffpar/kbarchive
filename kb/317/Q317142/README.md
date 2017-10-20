---
layout: page
title: "Q317142: How to Change a Service  Account Password with a Batch File"
permalink: /kb/317/Q317142/
---

## Q317142: How to Change a Service  Account Password with a Batch File

{% raw %}

	Article: Q317142
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): ocsso
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to change a computer's service account password by
	using a batch file.
	
	In some cases, you may want to change a service account remotely or for numerous
	computers. You can use the sc.exe command to create a batch file for this
	purpose. Sc.exe is a command-line utility that allows you to communicate with
	the Windows NT Service Controller and services. This utility is available on the
	Microsoft Windows NT Server 4.0 Resource Kit CD-ROM.
	
	MORE INFORMATION
	================
	
	Change the Password on a Service Account
	----------------------------------------
	
	The following is an example of how you can use the sc.exe command-line utility in
	a batch file to change a service account password
	
	  net view | find "\" >server.txt
	
	  for /F %%i in (server.txt) do sc %%i config service_name password= new_password
	
	where service_name is the name of the service account and <new_password> is
	the new password that you want to assign to the service account.
	
	For information about how to obtain the Windows NT Server 4.0 Resource Kit (and
	the Windows NT Workstation 4.0 Resource Guide), browse to the following
	Microsoft Web site:
	
	  http://www.microsoft.com/technet/treeview/default.asp?url=/technet/itsolutions/reskits/rktmain.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : ocsso 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
