---
layout: page
title: "Q124035: ATI Graphics Pro Turbo Video DAC Incorrectly Detected"
permalink: /kb/124/Q124035/
---

## Q124035: ATI Graphics Pro Turbo Video DAC Incorrectly Detected

{% raw %}

	Article: Q124035
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade or install Windows NT version 3.5 on a computer with an ATI
	Graphics Pro Turbo PCI video card, Windows NT Setup detects the video card as an
	ATI Graphics Compatible Adapter. Only 16 and 256 colors are supported for any
	resolution.
	
	If you manually configure the video card to use the ATI Graphics Pro Turbo video
	adapter driver, only 16 and 256 colors are available and the Test option of
	Display in Control Panel fails.
	
	CAUSE
	=====
	
	This problem occurs because the DAC (Digital-to-Analog Converter) is incorrectly
	identified as a Brooktree BT-47x DAC instead of an ATI 68860 DAC.
	
	RESOLUTION
	==========
	
	If the ATI Graphics Pro Turbo PCI video adapter is detected as using a Brooktree
	BT-47x DAC, call the ATI bulletin board system (BBS) at (905) 764-9404 and
	download 64NT35.ZIP. Extract the contents of 64NT35.ZIP and follow the
	installation instructions. For more information, contact ATI Technical Support
	at (905) 882-2600.
	
	To verify the DAC type:
	
	1. Run Control Panel and choose Display.
	
	2. Choose the Change Display Type button.
	
	3. Verify that the Adapter Type is the ATI Graphics Pro Turbo.
	
	4. Verify that the DAC type in Adapter Information is ATI 68860.
	
	The ATI product discussed here is manufactured by ATI Technologies, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the product's performance or reliability.
	
	Additional query words: prodnt brook tree
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
