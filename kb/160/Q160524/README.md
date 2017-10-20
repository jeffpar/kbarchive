---
layout: page
title: "Q160524: Using the TELES S0 16.3 Bit ISDN Card with MSN"
permalink: /kb/160/Q160524/
---

## Q160524: Using the TELES S0 16.3 Bit ISDN Card with MSN

{% raw %}

	Article: Q160524
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, with a TELES S0 16.3
	ISDN card, you may receive the following error message:
	
	  Modem is busy or cannot be found. Your modem may already be in use, turned
	  off or not connected properly. Please check it and try again.
	
	CAUSE
	=====
	
	Using the TELES S0 16.3 ISDN card with MSN requires the following software:
	
	- CAPI port drivers
	
	- Microsoft ISDN Accelerator Pack
	
	RESOLUTION
	==========
	
	CAPI Port Drivers
	-----------------
	
	Teles provides the CAPI port drivers on the CD-ROM included with the TELES S0
	16.3 ISDN card. To install the Acotec Capi 2.0 protocol, use the following
	steps:
	
	1. Insert the Teles CD-ROM in the CD-ROM drive.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Network.
	
	4. On the Configuration tab, click Add.
	
	5. Click Protocol, and then click Add.
	
	6. Click Have Disk.
	
	7. Browse to the following path
	
	  <drive>:\CSS\GER\Win95
	
	  where <drive> is your CD-ROM drive.
	
	8. Add the Acotec protocol.
	
	9. Click OK or Close. When you are prompted to restart the computer, click Yes.
	
	10. Verify that the ACOISDN modem is installed by following these steps:
	  a. In Control Panel, double-click Modems.
	
	  b. If ACOISDN is not listed, click Add and follow the instructions on the
	     screen to add the modem.
	
	ISDN Accelerator Pack
	---------------------
	
	For information about obtaining and installing the ISDN Accelerator Pack, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/windows/software/localize/gerisdn.htm
	
	Finishing Setup
	---------------
	
	After you install your TELES SO 16.3 ISDN card software, restart the computer and
	do the following:
	
	1. Click Start, point to Programs, and then click Teles Online-PowerPack.
	
	2. Click Miniport.
	
	3. Click Install.
	
	4. In the Network window, click Add, and then click the TELES SO 16.3 ISDN card.
	
	5. Click Have Disk, and then click Browse.
	
	6. Specify the path where you want to install the Teles files, and then click
	  OK.
	
	7. In the Manufacturers box, click Teles AG Berlin.
	
	8. In the Network Adapters box, click Teles ISDN NDIS WAN, and then click OK.
	
	9. Click Browse.
	
	10. Click the Ndiswan.inf file, and then click OK.
	
	11. Click Next.
	
	12. Click the DSS1 protocol, and then click Next.
	
	13. Type the MSN access number for your area.
	
	14. Click Next, and then click Finish.
	
	15. When you are prompted to restart the computer, click Yes.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	
	=============================================================================
	

{% endraw %}
