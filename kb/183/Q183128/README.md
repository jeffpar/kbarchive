---
layout: page
title: "Q183128: Configuring an Attachmate Advanced ISCA Adapter for Legacy Mode"
permalink: /kb/183/Q183128/
---

## Q183128: Configuring an Attachmate Advanced ISCA Adapter for Legacy Mode

{% raw %}

	Article: Q183128
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Attachmate Advanced ISCA SDLC adapter must be configured for legacy mode if
	the BIOS on the SNA Server computer does not support Plug and Play. The
	resources (IRQ, Memory address, and I/O address) must be configured manually
	using the diagnostics disk that ships with the adapter.
	
	MORE INFORMATION
	================
	
	Below are the steps to configure the Attachmate Advanced ISCA adapter for legacy
	mode. The steps are also listed in the manual that ships with the adapter.
	
	1. Boot to DOS using a DOS-bootable diskette, and run ISCAPNP from the "Advanced
	  ISCA Adapter Diagnostic and NWSAA Server Driver" diskette that ships with the
	  adapter.
	
	2. The diagnostic program will search for the Advanced ISCA adapter. Because the
	  adapter is programmed for Plug and Play mode by default, the following error
	  will be displayed: "Adapter not enabled. Adapter is configured for Plug &
	  Play mode, but no PnP BIOS is present." Click OK to clear the error.
	
	3. From the Adapter menu, select Configuration Mode. Select Legacy and then
	  click OK.
	
	4. Select the I/O, memory, and IRQ settings for the adapter. Click OK.
	
	5. A dialog box will be displayed with the following text: "About to reprogram
	  EEPROM. Do you want to continue?" Click Yes. For the changes to take effect,
	  restart the PC using the Reset button or by turning the PC of and then back
	  on.
	
	6. If the PC does not restart after changing the adapter settings, use the W1
	  jumper on the adapter to recover. Turn off the PC, take the card out, and
	  disable the settings by placing the W1 jumper on both pins. Install the card
	  into the PC again, and repeat the steps above. After the new settings are
	  verified, remove the W1 jumper and restart the PC.
	
	7. Next, install the drivers for the adapter. Run SETUP.EXE from the Advanced
	  ISCA Adapter SNA Server Driver disk that ships with the adapter. Follow the
	  instructions on the screen during setup.
	
	8. Finally, configure the link service and the connection in SNA Server. See the
	  online help in SNA Manager for more information.
	
	REFERENCES
	==========
	
	The information for this article was taken from the manual that ships with the
	Attachmate Advanced ISCA adapter.
	
	The Attachmate Advanced ISCA Adapter discussed here is manufactured by Attachmate
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	
	=============================================================================
	

{% endraw %}
