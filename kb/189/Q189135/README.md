---
layout: page
title: "Q189135: Err Msg: You Cannot Save While the File Is in Use by Another..."
permalink: /kb/189/Q189135/
---

## Q189135: Err Msg: You Cannot Save While the File Is in Use by Another...

{% raw %}

	Article: Q189135
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.3,6.0; WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify a mail merge data source file that is located on a Windows NT
	shared network drive using Microsoft Word version 6.0, you may receive the
	following prompt when you attempt to save the file:
	
	  <Maindoc>.doc is a mail merge main document that is attached to a
	  data source datasrc.doc that has not been saved. Do you want to save
	  <datasource>.doc?
	
	When you click Yes, you may receive the following error message:
	
	  You cannot save while the file is in use by another process. Try saving
	  the file with a new name. (X:\datasrc.doc).
	
	This behavior does not occur if you save the document to your local hard disk.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	- Save the mail merge data source file to your local hard disk.
	
	- Upgrade to Microsoft Word 97 for Windows or Microsoft Office 97 for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word version 6.0 and
	Windows NT version 4.0
	
	Additional query words: tools main
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINDOWS:4.3,6.0; WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
