---
layout: page
title: "Q181067: WD97: Run-Time Error 5584 &quot;Too Many DDE Channels Are Open...&quot;"
permalink: kb/181/Q181067/
---

## Q181067: WD97: Run-Time Error 5584 &quot;Too Many DDE Channels Are Open...&quot;

	Article: Q181067
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Microsoft Word or another program cannot open any additional Dynamic Data
	Exchange (DDE) channels, the following message may be displayed:
	
	  Run-Time error '5584':
	  Too Many DDE Channels are open. Please close a window.
	
	CAUSE
	=====
	
	When using DDE to communicate between programs, a separate "channel" or line of
	communication for each DDE conversation is created. It is possible to have
	multiple DDE conversations happening at the same time. While there is no
	absolute limit to the number of DDE conversations that can exist simultaneously,
	there is a relative limit that depends on the amount of system resources
	available. This limit varies from system to system.
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To prevent the error message from occurring, terminate each DDE conversation
	after you are finished using the channel. To terminate a DDE channel, use either
	of the following commands.
	
	  Syntax to Terminate a Specific Channel Number
	  ---------------------------------------------
	
	  DDETerminate(ChannelNumber)
	
	-or-
	
	  Syntax to Terminate All DDE Channels
	  ------------------------------------
	
	  DDETerminateAll
	
	For example, the following macro (Sub procedure) uses DDETerminate to close each
	DDE channel that is initiated.
	
	     Sub DDETest
	        For x = 1 to 40
	           chan = DDEInitiate("Excel", "Sheet1")
	           ' Your other commands go here.
	           DDETerminate chan
	        Next x
	     End Sub
	
	To reproduce the "Session too complex...." error message, start Word and Excel
	and run a macro that opens a number of DDE channels without terminating the
	channels.
	
	     Sub DDEReproduceError
	        For x = 1 to 40
	           n = DDEInitiate("Excel","Sheet1")
	        Next x
	     End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
