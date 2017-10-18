---
layout: page
title: "Q117595: INFO: Operating System Changes with System 7.1.2 and Power Mac"
permalink: kb/117/Q117595/
---

## Q117595: INFO: Operating System Changes with System 7.1.2 and Power Mac

	Article: Q117595
	Product(s): Microsoft FoxPro
	Version(s): 2.01,2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbvfp300b kbDSupport kbvfp250
	Last Modified: 28-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the introduction of the Power Macintosh, Apple has released version 7.1.2
	of the system software. System 7.1.2 has some new features and enhancements that
	may confuse users unfamiliar with the new operating system when they are
	performing standard troubleshooting tests. The purpose of this article is to
	document the differences between System 7.1 and System 7.1.2.
	
	MORE INFORMATION
	================
	
	Below is a list of the new features, enhancements, and modifications found in
	System 7.1.2. Note that this list may not be complete.
	
	
	- In the Memory Control Panel, the option to enable or disable 32-bit
	  addressing has been replaced with an option to turn the Modern Memory Manager
	  On or Off. Since all Power Macintoshes ship with a minimum of 8 MB of RAM,
	  32-bit addressing is always enabled. The Modern Memory Manager must be turned
	  On in order to run "native" Power Macintosh applications. The option to turn
	  off the Modern Memory Manager is provided in order to maintain compatibility
	  with older Macintosh applications.
	
	- Owners of machines with a Motorola 68040 processor can use the Cache Switch
	  Control Panel to enable or disable the on-chip caching of the processor in
	  order to improve performance with System 7.1. However, the Cache Switch
	  Control Panel cannot be used with the Power Macintosh.
	
	- If a Power Macintosh upgrade card is installed in a Motorola 680x0- based
	  machine, there will be a Power Macintosh Card Control Panel that can be used
	  to enable or disable the card.
	
	- Under System 7.1, a text editor called TeachText is provided. Under System
	  7.1.2, the SimpleText editor is provided instead.
	
	- Under System 7.1.2, there is a new Control Panel called PC Exchange, which
	  makes it easy to exchange documents between Macintosh and MS-DOS-based or
	  Windows-based computers. This Control Panel is superior in many ways to Apple
	  File Exchange (AFE) because it can format floppy disks for MS-DOS and can
	  associate MS-DOS files that have MS-DOS-style extensions (suffixes) with
	  Macintosh applications and document types. Note also that the PC Exchange
	  Control Panel is memory resident, unlike AFE, and will be disabled if the
	  Macintosh is started without extensions.
	
	- Minor changes have also been made to the Monitors and Sound Control Panels.
	
	REFERENCES
	==========
	
	Power Macintosh Upgrade Card "User's Guide"
	
	Additional query words: VFoxMac FoxMac 2.00a powermac
	
	======================================================================
	Keywords          : kbvfp300b kbDSupport kbvfp250 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbFoxBASE201Mac kbFoxBASESearch kbVFP300bMac
	Version           : :2.01,2.5b,2.5c,3.0b
	Issue type        : kbinfo
	
	=============================================================================
	
