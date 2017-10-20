---
layout: page
title: "Q91042: PC WFW: Postoffice Administration Not Available from Windows"
permalink: /kb/091/Q91042/
---

## Q91042: PC WFW: Postoffice Administration Not Available from Windows

{% raw %}

	Article: Q91042
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use Extensions for Windows for Workgroups to upgrade a Windows version
	3.1 for Workgroups postoffice to a version 3.0 Microsoft Mail for PC Networks
	postoffice, it is not possible to access the Mail Administrator program from
	within Mail for Windows.
	
	Before the Windows for Workgroups postoffice was upgraded, the Mail Administrator
	program could be accessed from the Mail menu within Mail for Windows. After the
	upgrade, if you select the Postoffice Manager command from the Mail menu, the
	following error message appears:
	
	  The ServerPath entry in your MSMAIL.INI file is missing or doesn't contain
	  the pathname of a valid Workgroup Postoffice.
	
	CAUSE
	=====
	
	As in the retail version of Microsoft Mail, it is expected that the Mail
	administrator log in from MS-DOS, using ADMIN.EXE.
	
	RESOLUTION
	==========
	
	You can remove the Postoffice Manager command from the Mail menu by completing
	the following steps:
	
	1. From the File menu in Microsoft Mail, choose Exit And Sign-Out.
	
	2. Open the MSMAIL.INI file with any text editor.
	
	3. Place a semi-colon before the following lines:
	
	  WGPOMgr1=3.0;Mail;;13
	  WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;WGPOMGR.DLL;
	  0;;Manage Workgroup Postoffice;MSMAIL.HLP;2870
	
	4. Save the changes to the MSMAIL.INI file.
	
	5. Exit out of the text editor.
	
	6. Restart Mail.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
