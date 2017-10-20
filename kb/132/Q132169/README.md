---
layout: page
title: "Q132169: Data Encryption Causes RAS NetBIOS Error 640 Error Message"
permalink: /kb/132/Q132169/
---

## Q132169: Data Encryption Causes RAS NetBIOS Error 640 Error Message

{% raw %}

	Article: Q132169
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to connect to a Windows NT 3.5 or 3.51 RAS server with a Windows
	for Workgroups 3.11 RAS client, and you have selected Require Data Encryption,
	the following error appears:
	
	  NETBIOS error 640: a netbios error has occurred (with failed code 0xa)
	
	CAUSE
	=====
	
	Windows for Workgroups version 3.11 was released before the development of RAS
	data encryption in Windows NT version 3.5 and 3.51. Because Windows for
	Workgroups RAS cannot negotiate this encryption it displays the error.
	
	For information on other causes of Error 640, see the following article in the
	Microsoft Knowledge Base:
	
	  Q111094 RAS ErrMsg: NETBIOS Error 640: A Netbios Error Has Occurred...
	
	
	WORKAROUND
	==========
	
	Disable the "Require data encryption" option under the Encryption settings in
	the Network Configuration dialog of the Remote Access Setup window. Click
	Configure after you select Remote Access Service in Control Panel Network to
	view the Network Configuration dialog.
	
	Additional query words: prodnt 3.11 wfw wfwg access denied
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
