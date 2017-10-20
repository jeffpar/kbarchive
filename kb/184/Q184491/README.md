---
layout: page
title: "Q184491: Some Print Jobs Print in Bold Text or Incorrect Font"
permalink: /kb/184/Q184491/
---

## Q184491: Some Print Jobs Print in Bold Text or Incorrect Font

{% raw %}

	Article: Q184491
	Product(s): Microsoft Windows NT
	Version(s): WinNT: 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print the same document several times from a computer running Windows
	NT 4.0 to a Windows NT 4.0 print server, some of the documents may be printed in
	an incorrect font or in bold text.
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions exist:
	
	- You print the document several times in succession.
	
	- The document you are printing contains a font that is not installed on the
	  print server.
	
	- Your computer is configured to use enhanced metafile (EMF) spooling.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	Method 1
	--------
	
	Install the appropriate font on your print server.
	
	Method 2
	--------
	
	Disable EMF spooling. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the appropriate printer, and then click Properties.
	
	3. Click Print Processor.
	
	4. Click the Always Spool RAW Datatype check box to select it, click OK, and
	  then click OK again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: meta file spool fonts change
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT: 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
