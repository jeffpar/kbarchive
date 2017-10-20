---
layout: page
title: "Q112654: Using the BocaModem M1440IW with WFWG RAS Client"
permalink: /kb/112/Q112654/
---

## Q112654: Using the BocaModem M1440IW with WFWG RAS Client

{% raw %}

	Article: Q112654
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	Microsoft does not encourage nor support changes to .INF files; therefore,
	Microsoft Product Support Services (PSS) does not support the procedure in
	this article. Although we have tested the following procedure and it
	appears to function as described; make a backup copy of your .INF file
	before you proceed.
	
	SYMPTOMS
	========
	
	When using the Remote Access Services (RAS) client that ships with Microsoft
	Windows for Workgroups version 3.11 with the BocaModem M1440IW, you may receive
	the following error message:
	
	  Error 652: Unrecognized response from the device.
	
	CAUSE
	=====
	
	In the RAS setup, the only selection available for the BocaModem is M1440. Using
	the BocaModem M1440IW with the M1440 settings may cause the above error message.
	
	RESOLUTION
	==========
	
	The chip set in the M1440IW differs from the M1440 in two areas: the compression
	and the initialization string. According to Boca Technical Support, editing the
	MODEM.INF file and manually changing the compression and initialization string
	lines should allow Windows for Workgroups to correctly identify and communicate
	with the M1440IW modem.
	
	1. Make a backup copy of the MODEM.INF file.
	
	2. Load the MODEM.INF file in a text editor.
	
	  NOTE: The MODEM.INF file is too large for the Windows Notepad application that
	  ships with Windows for Workgroups. You must use another text editor.
	
	3. Under the heading [BocaModem M1440], make the following modifications Change
	
	        <compression_on>=%C1
	
	  to:
	
	        <compression_on>=%C3
	
	  -and- Change
	
	        COMMAND_INIT=AT&F&C1&D2S0=0 V1 X4 E1 S7=55 S2=128<cr>
	
	  to:
	
	        COMMAND_INIT=AT&F&C1&D2S0=0 V1 X4 E1 S7=55 S95=1<cr>
	
	MORE INFORMATION
	================
	
	The BocaModem M1440IW is manufactured by Boca Research, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.11 BOCO Remote Access Service ptp
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
