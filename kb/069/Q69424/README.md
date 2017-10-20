---
layout: page
title: "Q69424: Meaning of Handshake Option in PostScript Driver"
permalink: /kb/069/Q69424/
---

## Q69424: Meaning of Handshake Option in PostScript Driver

{% raw %}

	Article: Q69424
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on the exact meaning of the Handshake option
	for the Windows 3.0 PostScript driver and is divided into the following
	sections:
	
	- Meaning of Handshake Option in PostScript Driver
	
	- PostScript Printer Driver Handshake Option Doesn't Change
	
	- PostScript Code Sent to the Printer When Handshake Set to Hardware
	
	MORE INFORMATION
	================
	
	Meaning of Handshake Option in PostScript Driver
	------------------------------------------------
	
	There are two selections available when you choose the Handshake option with a
	PostScript device: Hardware and Software. Normally, Hardware is the preferable
	handshaking method to select.
	
	A frequent misconception is that the Handshake option in the Windows PostScript
	driver is used to set the method Windows uses to perform handshaking with the
	printer. This is incorrect. The handshaking method used by Windows is set in the
	Ports section of the Windows Control Panel.
	
	The Handshake option in the PostScript driver is used to set the handshaking
	method the PostScript printer uses. It does not affect the handshaking method
	Windows uses. The Windows handshaking method must be set in the Control Panel to
	match the method set in the PostScript driver.
	
	To set the PostScript driver Handshake option, do the following:
	
	1. In the Control Panel window, choose the Printers icon.
	
	2. Select the PostScript printer from the list of installed printers and choose
	  the Configure button.
	
	3. In the Configure dialog box, choose the Setup button.
	
	4. Choose the Options button in the PostScript Printer dialog box.
	
	5. Choose the Handshake button.
	
	When you use the PostScript Handshake option button to set the printer's
	handshaking, the driver sends actual PostScript language code to the printer.
	This code sets the handshaking method the printer then uses. This setting
	remains intact, even if the printer is turned off, until reset using the same
	option.
	
	NOTE: In the Windows Control Panel, handshaking is referred to as Flow Control.
	Also, software handshaking is referred to as Xon/Xoff.
	
	PostScript Printer Driver Handshake Option Doesn't Change
	---------------------------------------------------------
	
	When you use the Handshake option in the PostScript printer driver to change the
	handshake setting of the printer from Hardware to Software, the setting in the
	dialog box remains set to Hardware. This is expected behavior.
	
	It is a common misconception that the Handshake dialog box for the PostScript
	printer driver indicates what the current handshake setting is for the printer.
	Because Windows cannot query the printer to determine which handshaking mode is
	being used, there is no way for the driver to indicate the current setting to
	the user. This dialog box is intended to send the appropriate PostScript code to
	the printer, which sets the printer to either hardware or software handshaking.
	
	PostScript Code Sent to the Printer When Handshake Set to Hardware
	------------------------------------------------------------------
	
	When you configure the PostScript printer driver for printer handshaking with
	Hardware, the following PostScript program is sent to the printer:
	
	     !PS-Adobe-3.0
	     %Creator: Windows PSCRIPT
	     %Title: PSSWHand
	     statusdict begin statusdict /jobname (PSSWHand) put end
	     serverdict begin 0 exitserver/Helvetica findfont 20 scalefont
	        setfont
	     100 200 moveto statusdict begin 25 sccbatch exch pop 4 ne{25 25
	        sccbatch
	     pop 4 setsccbatch(Hardware handshaking enabled.)}{(Hardware
	        handshaking already enabled.)}ifelse show 100 100 moveto
	        defaulttimeouts 60
	     lt{300 setdefaulttimeouts(Wait timeout changed.)}{pop pop(Wait
	        timeout already properly set.)}ifelse show showpage quit
	
	Additional query words: 3.00 3.00a win30 dwsa post script
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
