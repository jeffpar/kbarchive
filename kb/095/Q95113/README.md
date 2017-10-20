---
layout: page
title: "Q95113: WFWG: Creating a WGPO on a Novell NetWare Server"
permalink: /kb/095/Q95113/
---

## Q95113: WFWG: Creating a WGPO on a Novell NetWare Server

{% raw %}

	Article: Q95113
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Windows for Workgroups Mail User's Guide" describes how to create a
	Workgroup Postoffice (WGPO) on a Novell NetWare server in Appendix B. Step 7 of
	these instructions directs the user to create the WGPO by following the steps
	explained in Chapter 5 of the Mail User's Guide.
	
	The last step in Chapter 5 is to share the newly created WGPO. This step should
	not be done since the post office will be on a NetWare server. If the user
	attempts to share the WGPO directory on the NetWare server, the following error
	message occurs:
	
	  You can only share resources that are on your computer. If you are trying to
	  share a printer, make sure that it is a local printer and that the TEMP
	  directory is on a local drive.
	
	MORE INFORMATION
	================
	
	Sharing the NetWare postoffice is not necessary; connections to the WGPO are
	made with the ServerPath= entry in the MSMAIL.INI, which reflects the
	appropriate NetWare Workgroup Postoffice location.
	
	Sharing a redirected, network drive is not possible in Windows For Workgroups.
	
	REFERENCES
	==========
	
	"Microsoft Windows for Workgroups Mail User's Guide," Appendix B
	
	Additional query words: doc err 3.10 3rdparty post office setup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
