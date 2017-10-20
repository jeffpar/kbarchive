---
layout: page
title: "Q151299: Attachmate SDLC Card Not Respond to Connection Activation"
permalink: /kb/151/Q151299/
---

## Q151299: Attachmate SDLC Card Not Respond to Connection Activation

{% raw %}

	Article: Q151299
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Attachmate SDLC card and the Attachmate Advanced SDLC card
	using the link support included in SNA Server 2.0, 2.1, 2.11, or 2.11 Service
	Pack 1, the link support does not function properly for computers that have an
	ISA/PCI bus configuration. The problem may manifest itself in the following
	ways:
	
	- Link Service will start, but the connection defined for it in SNA Server
	  Admin will not shift from Inactive.
	
	- Link Service will start, the connection will shift to a Pending state, but if
	  a Level 2 trace is taken on the Link Service, the trace will show no frames
	  sent or received.
	
	- Link Service will start, but modem does not dial or respond to dial commands.
	  The modem status lights will not show any change.
	
	- Link Service will not start.
	
	CAUSE
	=====
	
	The above symptoms may be due to an incompatible INF file. If the Link Service
	was installed with an improper INF file, the card name will not show in the drop
	down box labeled Card Type of the Link Service Setup dialog box.
	
	WORKAROUND
	==========
	
	Attachmate provides replacement driver and INF files on their Web site:
	
	  http://www.attachmate.com
	
	Use your Web browser to connect to this site. Go to the Support section, select
	the File Library section, select the Hardware folder, and download the
	appropriate file for your specific Attachmate SDLC card.
	
	The files are self extracting executables. After you extract the files, follow
	the steps below to replace the INF file on your SNA Server (if you are using a
	version previous to 2.11, you may also need newer drivers):
	
	1. Remove the link service using SNA Server Setup.
	
	2. Run File Manager.
	
	3. Search the SNA root directory and all subdirectories for a file named
	  Advsdlc.inf (for the Attachmate Advanced SDLC card), or Atmsdlc.inf (for the
	  Attachmate SDLC card).
	
	4. Replace the file with the corresponding file from the download from the
	  Attachmate gopher site.
	
	5. Add the Link Service again. The name of the card should appear in the pull
	  down box at this time.
	
	The third-party products are manufactured by Attachmate Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	MORE INFORMATION
	================
	
	You can detect the problem by using the following steps:
	
	1. Ensure that the card is installed correctly by verifying that no IRQ, DMA (in
	  the case of the Attachmate SDLC card), I/O address, or Shared Memory Address
	  (in the case of the Attachmate Advanced SDLC card) conflicts exist. Also,
	  verify that Plug and Play is disabled, as well as any other settings that may
	  conflict with Microsoft Windows NT.
	
	2. Run the SNA Server Setup program.
	
	3. Click the Continue button, and then click the Links button.
	
	4. If the Attachmate link service has been installed already, click the
	  Attachmate link service, and then click the Configure button. Otherwise
	  select the Add... button, and select the appropriate Attachmate SDLC link
	  service. Ensure that the SNA Server media is accessible in case the Setup
	  program asks for the installation path.
	
	5. After you configure the card specific parameters, click Continue until you
	  reach the Link Service Setup window.
	
	6. Select the Card Type list. If no card appears on the list, you probably have
	  the incorrect INF file.
	
	Additional query words: NT SNA 2.11 3.51 SDLC atmsdlc advsdlc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	

{% endraw %}
