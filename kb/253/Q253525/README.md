---
layout: page
title: "Q253525: XCLN: Outlook for Macintosh Loses Connectivity"
permalink: kb/253/Q253525/
---

## Q253525: XCLN: Outlook for Macintosh Loses Connectivity

	Article: Q253525
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0,8.1,8.2; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1, 8.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Exchange Client or Outlook for Macintosh, you may lose
	connectivity to the global address list, the personal address book (PAB), or
	personal folder files (.pst files). This may affect your ability to send e-mail
	to a user who is in the global address list and your ability to remain connected
	to your PAB or .pst file when you are connected to the global address list.
	
	CAUSE
	=====
	
	This problem can occur because resources have been depleted in the 16-bit
	version of the Exchange Client or Outlook. The 16-bit client versions are
	limited by their environment. Resources can be depleted by any of the following
	conditions:
	
	- More Address Book views are set up on the Exchange Server computer than the
	  client can handle. This condition occurs if additional Address Book views are
	  added. Connectivity to the global address list, PAB, or .pst files is lost.
	
	- Too many objects have been added to either the PAB or .pst files. This
	  condition occurs after names are added to the PAB or .pst files.
	
	- Too many other applications are open at the same time, and are reducing the
	  amount of available resources for the Exchange Client or Outlook. When this
	  condition occurs, the client works when it is the only application running,
	  but does not work when other applications that may compete for resources are
	  running.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the three following methods:
	
	- Update and optimize redundant Address Book view entries to allow more
	  efficient Address Book view use, or eliminate certain Address Book views.
	
	- Remove or archive old entries or items from the PAB and .pst files. You can
	  check .pst files for errors or re-create them, if necessary, by using the
	  Inbox Repair utility (Scanpst.exe).
	
	- Identify other applications that are running when Outlook is running and
	  adjust the memory allocation for each of these applications so that the
	  necessary memory is available.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q195666 Macintosh Outlook Ends Unexpectedly with Type 2 Error
	
	MORE INFORMATION
	================
	
	The exact amount of allocated memory is a function of the names that are used in
	the global address list, PAB, and .pst files, and is tied to the available
	resources of the workstation and the other applications that are running at the
	same time. You need to adjust and test all of the various factors to determine
	the optimal environment for your 16-bit client.
	
	The 32-bit Windows clients do not experience this problem, because of their
	ability to address a larger memory address space.
	
	Additional query words: OUTLOOK MAC 16-bit Allocated Memory GAL PAB PST Limits
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3 kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac kbOutlook810Mac kbOutlook820Mac
	Version           : MACINTOSH:8.0,8.1,8.2; WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
