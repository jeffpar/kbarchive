---
layout: page
title: "Q124065: PC Win: Err Msg: There is not a valid workgroup postoffice...."
permalink: /kb/124/Q124065/
---

## Q124065: PC Win: Err Msg: There is not a valid workgroup postoffice....

{% raw %}

	Article: Q124065
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to install the Windows for Workgroups (WFW) Mail client, the
	following error message appears:
	
	  There is not a valid workgroup postoffice at the network path you entered.
	
	This message is displayed when you attempt to connect to an existing postoffice
	located on a PC-NFS server.
	
	CAUSE
	=====
	
	The Mail Setup dialog box does not accept universal naming convention (UNC)
	paths or mapped network drives. For example, you could not use either of the
	following paths:
	
	  \\server_name\share_name\wgpo
	
	  -or-
	
	  <drive>:\wgpo
	
	where <drive> is the letter of a network drive you connected to in File
	Manager.
	
	
	RESOLUTION
	==========
	
	Use the following procedure to resolve this problem:
	
	1. Connect to the PC-NFS server using File Manager. This will establish a
	  connection to the existing post office using a mapped drive letter.
	
	2. Edit the MSMAIL.INI file using a text editor, such as Notepad. Change or add
	  the following line in the [Microsoft Mail] section:
	
	  "ServerPath=<drive>:\WGPO" (without the quotation marks)
	
	  where <drive> is the letter of the mapped drive you created in Step 1.
	
	  If no MSMAIL.INI file exists, one can be created in the WINDOWS directory with
	  these entries:
	
	  [Microsoft Mail]
	  WG=1
	  ServerPath=<drive>:\WGPO
	
	3. Start Mail.
	
	4. Choose Yes when asked:
	
	  Do you have an account on the postoffice <drive>:\WGPO?
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
