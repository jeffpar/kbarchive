---
layout: page
title: "Q314762: MSN Broadband Customer Unable to Complete CPE Setup after Using"
permalink: /kb/314/Q314762/
---

## Q314762: MSN Broadband Customer Unable to Complete CPE Setup after Using

{% raw %}

	Article: Q314762
	Product(s): The Microsoft Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network Version 7.0 
	- the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you previously used MSN Explorer with a dial-up service and you are now
	trying to install a DSL connection, you may be unable to complete the setup of
	CPE. After several minutes of "Checking DSL Modem", you may be given a choice to
	"Cancel" or "Retry". If you choose to "Retry", you will experience a repeating
	loop.
	
	CAUSE
	=====
	
	The code used in the installation program is interacting with wininet, the
	object that controls the Online/Offline status in Windows XP.
	
	RESOLUTION
	==========
	
	This issue will be resolved in the next release of the installation CD. Until
	that time, please use the following steps during installation.
	
	To install MSN Broadband
	------------------------
	
	1. Launch the MSN Broadband setup as detailed in the Welcome Kit.
	
	2. When the status changes to Checking DSL Modem, launch Internet Explorer.
	  Note: Do not launch MSN Explorer at this time.
	
	3. When prompted to Connect or Stay Offline, choose Connect. When Internet
	  Explorer launches, minimize it.
	
	4. Continue with Setup.
	
	Additional query words: kbimu; MSN Broadband Setup
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch _IKkbbogus kbOSWinXP kbMSNSearch kbMSNExplorer kbOSWinXPSearch kbMSN700
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
