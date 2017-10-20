---
layout: page
title: "Q123877: How to Set Up Banyan VINES in Windows 95"
permalink: /kb/123/Q123877/
---

## Q123877: How to Set Up Banyan VINES in Windows 95

{% raw %}

	Article: Q123877
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to install Banyan VINES connectivity in Microsoft
	Windows 95.
	
	NOTE: You must be using Banyan VINES version 5.52(5) or later.
	
	MORE INFORMATION
	================
	
	1. Make sure Banyan VINES connectivity works before you install Windows 95.
	
	2. Install Windows 95.
	
	3. Use the right mouse button to click the Network Neighborhood icon, then click
	  Properties on the menu that appears.
	
	4. Add the following components to Network properties if they are not present:
	
	  - Network adapter
	  - Banyan DOS/Windows 3.1 client
	  - Banyan VINES Protocol
	
	5. The AUTOEXEC.BAT file should contain the following lines:
	
	  Path=Z:\...
	  C:\WINDOWS\net initialize
	  cd \banyan
	  ban /nc
	  ndisban
	  redirall
	  C:\WINDOWS\net start
	  arswait
	  z:login
	
	  NOTE: This information assumes that the Banyan files are located in the Banyan
	  directory. If this is not the case, adjust the lines above accordingly.
	
	6. Restart your computer to make sure you are prompted to log on to Banyan
	  VINES, and that you can access any Banyan VINES mapped drives.
	
	  NOTE: Because Banyan VINES servers do not have browsing capabilities, they do
	  not appear in your Network Neighborhood.
	
	Troubleshooting
	---------------
	
	1. Check the network adapter in the Network property sheet to make sure it is
	  set for a real-mode 16-bit NDIS driver.
	
	2. Check the PROTOCOL.INI file in the Windows directory for the following
	  sections:
	
	  [BAN$VINES]
	  DriverName=ndisban$
	  Bindings=EXP16$
	  Lanabase=1
	
	  [NDISBAN$]
	  DriverName=NDISBAN$
	  Lanabase=1
	  Bindings=EXP16$
	
	  NOTE: This example uses the Intel EtherExpress 16 network card.
	
	3. Run PCCONFIG.EXE from your Banyan VINES directory to make sure its driver
	  name matches the "Bindings=" line above.
	
	4. Make sure drive Z has the latest VINES.DRV and VVINESD.386 files.
	
	5. If you are using token-ring, your AUTOEXEC.BAT should contain NDTOKBAN
	  instead of NDISBAN.
	
	6. Try to load drivers high. (They require a lot of conventional memory.)
	
	7. If you add the Banyan VINES client, it does not add the Banyan VINES
	  protocol. However, if you add the Banyan VINES protocol, the Banyan VINES
	  client is automatically added.
	
	8. To set up a printer, you must run VINES.EXE from drive Z and choose printer
	  services. You, or the network administrator, must set up print queues. This
	  sets up a port (LPT1, for example) to be redirected to a network printer. In
	  Windows 95, you can install a local printer on LPT1 and it should work
	  correctly.
	
	9. If you receive a message stating that your version of Banyan VINES is not the
	  latest version, edit the Vines.ini file as follows
	
	  [NEWREV]
	  dontcopy=1
	  vines.version=5.5<x> (<x>) USA
	  windows.version=3.95
	
	  where <x> is the version of Banyan VINES you are using.
	
	10. If you do not see the Banyan VINES screen before Windows 95 starts, there is
	  a problem with the VINES drivers in the AUTOEXEC.BAT file.
	
	11. If you can log on to the network but you cannot map Banyan VINES drives, or
	  drives mapped in the login script appear as local drives, make sure that Z:
	  is included in the Path statement in the AUTOEXEC.BAT file.
	
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
