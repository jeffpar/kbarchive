---
layout: page
title: "Q195178: INFO: Setting the IPX Internal Network Number During Unattended"
permalink: /kb/195/Q195178/
---

## Q195178: INFO: Setting the IPX Internal Network Number During Unattended

{% raw %}

	Article: Q195178
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbOPK kbSBK
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you perform an unattended installation of Windows NT 4.0 and install the
	NWLink IPX/SPX Compatible Transport (IPX), you have no means of specifying the
	internal network number in the Unattend.txt file. This article will provide a
	detailed explanation of how you can set the internal network number during an
	unattended installation.
	
	MORE INFORMATION
	================
	
	To set the internal network number during an unattended installation, follow
	these steps:
	
	1. Copy all the Windows NT system files needed, usually the i386 directory and
	  all its subdirectories from the compact disc to the distribution server,
	  which is a network share devoted to network client setup. The directory name
	  of this network share is usually also i386.
	
	2. Create the Unattend.txt file with any parameters that you feel are necessary
	  including NWLNKIPX. In your Unattend.txt file, make sure Oempreinstall is set
	  to Yes.
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	  Q159837 Setting the Frame Type for IPX During Unattended Setup
	
	3. Create a directory named $oem$ under the i386 directory (the directory of the
	  network share on the distribution server).
	
	4. In the $oem$ directory, create a text file named Cmdlines.txt that contains
	  the following two lines:
	
	        [Commands]
	        ".\regedit /s ipx.reg"
	
	5. Also in the $oem$ directory, create a text file named ipx.reg that contains
	  the following four lines:
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NwlnkIpx
	  \Parameters]
	  "VirtualNetworkNumber"=dword:00000007
	
	  NOTE: The second line is blank, but it must be present; line 3 above wraps to
	  the next line for readability, but it should be all on one line in the
	  ipx.reg file, with no spaces between \NwlnkIpx and \Parameters (that is,
	  ...\NwlnkIpx\Parameters). Also please note, the value "00000007" is the
	  internal network number. Please change this to your desired value.
	
	6. Place a copy of the Regedit.exe file (from the i386 directory) in the $oem$
	  directory. At this point, there should be three files in the $oem$ directory:
	  Cmdlines.txt, ipx.reg, and Regedit.exe.
	
	7. Run unattended setup.
	
	NOTE: Each computer on the network requires a unique internal network number. The
	value noted in step 5 above should be changed to a unique value prior to each
	installation.
	
	REFERENCES
	==========
	
	For additional information regarding the internal network number, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q150546 NWLink IPX/SPX: Network Number vs. Internal Network Number
	
	Additional query words: unattend automated Unatteded Setup
	
	======================================================================
	Keywords          : kbnetwork kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
