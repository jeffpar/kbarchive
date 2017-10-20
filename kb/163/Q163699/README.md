---
layout: page
title: "Q163699: &quot;Disk May be Full&quot; Message When Saving File to a Novell Server"
permalink: /kb/163/Q163699/
---

## Q163699: &quot;Disk May be Full&quot; Message When Saving File to a Novell Server

{% raw %}

	Article: Q163699
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages when trying to save a *.DOT
	file and/or other documents from Word for Windows to a Novell Server using
	Novell's Redirector on a computer running Windows 95.
	
	  Word cannot save or create this file. The disk may be full or write
	  protected.
	
	-OR-
	
	  There has been a network or file permission error. The network connection may
	  be lost.
	
	CAUSE
	=====
	
	
	When you try to save a file in Word, it will create some temporary files. One of
	the actions Word takes is to move the current file into a temporary file using
	the MoveFile API call in Windows NT. When this call is resolved through Novell's
	redirector, it returns with a failure. This causes Word to return the error
	message above.
	
	NOTE: After installing the OS/2 Namespace on the Novell server, this error may
	disappear.
	
	STATUS
	======
	
	Novell has confirmed this to be a problem in Novell Client 32 redirector, Please
	contact Novell for a fix and further information.
	
	
	Additional query words: netware client 32
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
