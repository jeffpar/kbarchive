---
layout: page
title: "Q273742: XADM: Error Message: Setup Failed While Installing Sub-Component"
permalink: kb/273/Q273742/
---

## Q273742: XADM: Error Message: Setup Failed While Installing Sub-Component

	Article: Q273742
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Exchange 2000 Server Release Candidate 2 (RC2) to Exchange 2000
	Release to Manufacturing (RTM), you may receive the following error message:
	
	  Setup failed while installing sub-component
	  Platinum Osmium Synchronizer with error code 0xc103fd04.
	  (Please consult the installation logs for a detailed description.)
	
	The Exchange Server Setup Progress.log file may report the following error
	message:
	
	  Error code 0XC103FD04 (64772): Unable to find an Microsoft Exchange 2000
	  Server ADC with which to associate the Setup synchronization Connection
	  Agreement object.
	
	CAUSE
	=====
	
	This issue can occur if there is a previous version of Active Directory
	Connector (ADC) on the server.
	
	RESOLUTION
	==========
	
	To resolve this issue, run the ADC Setup.exe program that is located on the
	Exchange 2000 Server CD-ROM.
	
	To upgrade your ADC servers:
	
	1. Quit all management consoles and Microsoft Management Console (MMC) snap-ins.
	
	2. Run the ADC Setup program located at:
	
	  <drive>:\Adc\I386\Setup
	
	  where <drive> is the letter of your CD-ROM drive.
	
	3. Click the Reinstall option
	
	MORE INFORMATION
	================
	
	This error may occur near the end of the installation process for the Exchange
	2000 Messaging and Collaboration component, when the registry is being
	configured.
	
	Additional query words: 0xc103fd04; c103fd04 Progress log setup exe exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Component         : Setup
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
