---
layout: page
title: "Q102682: PC Forms: Text Not Aligned in Mail 2.1 Client"
permalink: kb/102/Q102682/
---

## Q102682: PC Forms: Text Not Aligned in Mail 2.1 Client

	Article: Q102682
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for Windows, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a message created using version 1.0 of Microsoft Electronic Forms
	Designer with version 2.1 of Microsoft Mail for Windows, the text may not align
	properly and may display unreadable ("garbage") characters.
	
	CAUSE
	=====
	
	This problem is caused by the way Mail 2.1 clients interpret tab characters.
	
	Because the Mail 2.1 clients cannot unpackage the data attached to a custom form,
	they receive the message in text format. If the text-formatted version of the
	message contains tabs (for example, the Phone form), the message can display
	misaligned and may include some garbage characters. The following is a summary
	of how tabs are displayed in each of the Mail 2.1 clients:
	
	  Client      How tabs are displayed
	  -------------------------------------------------------------------
	
	  MS-DOS      Tabs are displayed as small diamonds and down arrows.
	
	  MAC         Tabs appear as small squares.
	
	  PM          Tabs are displayed as underscores.
	
	  Windows     Tabs appear as small black boxes.
	
	RESOLUTION
	==========
	
	Upgrade the client software to Microsoft Mail for Windows version 3.0 or later.
	Tabs are handled more consistently in versions 3.0 and later of Microsoft Mail.
	
	
	Additional query words: 1.00 textize presentation manager
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,2.1
	
	=============================================================================
	
