---
layout: page
title: "Q58592: Mac Hyp: AddEnclosure Adds an Enclosure to a Message"
permalink: kb/058/Q58592/
---

## Q58592: Mac Hyp: AddEnclosure Adds an Enclosure to a Message

	Article: Q58592
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To add the file named fileName to a specified message as an enclosure, use the
	following syntax:
	
	  msmail (addEnclosure, messageRef [,fileName])
	
	The filename "fileName" can be a complete path (for example, "Hard
	Disk:Documents:Report") or a partial path (for example, ":OtherStacks:Demo").
	Partial paths start from the folder that contains HyperCard.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	If no filename is given, the standard Macintosh Open File dialog box is
	presented, and you can select the file that is sent.
	
	Microsoft Mail version 2.00 does not support adding multiple enclosures, but Mail
	version 3.00 does. To add multiple enclosures, make multiple calls to
	AddEnclosure.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
