---
layout: page
title: "Q198347: XGEN: Readme.txt: Microsoft Exchange 5.5 U.S. Service Pack 2"
permalink: /kb/198/Q198347/
---

## Q198347: XGEN: Readme.txt: Microsoft Exchange 5.5 U.S. Service Pack 2

{% raw %}

	Article: Q198347
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the Readme.txt file that accompanies Microsoft Exchange Server
	version 5.5 U.S. Service Pack 2 on Microsoft's anonymous FTP site on the
	Internet.
	
	               Microsoft Exchange Server Version 5.5
	                           Service Pack 2
	
	Information in this document is subject to change without notice and is
	provided for informational purposes only. The entire risk of the use or
	results of the use of this document remains with the user, and Microsoft
	Corporation makes no warranties, either express or implied. Complying with
	all applicable copyright laws is the responsibility of the user. No part of
	this document may be reproduced or transmitted in any form or by any means,
	electronic or mechanical, for any purpose, without the express written
	permission of Microsoft Corporation.
	Microsoft may have patents, patent applications, trademarks, copyrights, or
	other intellectual property rights covering subject matter in this
	document. Except as expressly provided in any written license agreement
	from Microsoft, the furnishing of this document does not give you any
	license to these patents, trademarks, copyrights, or other intellectual
	property.
	(c) 1998 Microsoft Corporation. All rights reserved.
	
	Microsoft, MS-DOS, MS, Outlook, Windows, and Windows NT are either
	registered trademarks or trademarks of Microsoft Corporation in the U.S.A.
	and/or other countries.
	Other product and company names mentioned herein may be the trademarks of
	their respective owners.
	
	---------------------------------------------------------------------
	Installing the Service Pack 2 Update from the Compressed Files
	---------------------------------------------------------------------
	1. Create an SP2 directory on your local hard drive.
	
	2. Download all of the compressed files in the
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-
	  public/fixes/<LANG>/Exchg 5.5/SP2/server directory into the new SP2
	  directory.
	
	3. At the Windows NT command prompt, switch the unpack location in your SP2
	  directory and type the filename to bring up the Self-extracting menu.
	
	4. At the Self-extracting menu, type the location of the SP2 folder in the
	  "Unzip to folder" box. Then select the "Unzip" button. Once the process
	  is completed select "OK,"  and then select "Close."
	
	The following files are provided for Exchange Server 5.5 Service Pack 2:
	
	   Server update for Alpha                SP2_550A.EXE
	   Server update for Intel                SP2_550I.EXE
	   Chat server update for Alpha           SP2_55CA.EXE
	   Chat server update for Intel           SP2_55CI.EXE
	   Documentation                          SP2_55DC.EXE
	   HTML Form Converter                    SP2_55FO.EXE
	   Server support files (cluster,KMS,etc) SP2_55SS.EXE
	   Exchange connector installation(Alpha) SP2_55XA.EXE
	   Exchange connector installation(Intel) SP2_55XI.EXE
	   Server symbols for Alpha               SP2S550A.EXE
	   Server symbols for Intel               SP2S550I.EXE
	   Chat server symbols for Alpha          SP2S55CA.EXE
	   Chat server symbols for Intel          SP2S55CI.EXE
	   Readme and HTML file                   SP2_55RE.EXE
	
	5. Perform steps 3 and 4 for each file you need.
	
	You need all files to use the Readme.htm to access Service Pack 2. The
	Readme.rtf and Readme.htm refer to these files in the SP2 directory as
	being located in the CD-ROM drive.
	
	For detailed information about Exchange Server 5.5 SP2, see the enclosed
	server Readme in the file SP2_55RE.exe.
	
	Note: All compressed files in the Server directory were intended to be
	extracted on the I386 platform. Files for extraction on the Alpha platform
	are available in the
	ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/<LANG>/Exchg
	5.5/SP2/server/Alpha directory.
	
	-----------------------------------------------------------------
	Installing the Service Pack 2 Windows 16-bit Client Update from the
	Compressed File
	-----------------------------------------------------------------
	1. Create an SP2 directory (or use existing).
	
	2. Download the compressed client file appropriate for your hardware
	  platform into the SP2 directory.
	
	  Select the following file:
	
	      Windows client for 16-bit              SP2_55WI.EXE
	
	3. At the Windows NT command prompt, switch to the unpack location, and
	  type the file name to bring up the Self-extracting menu. From the menu
	  select the folder in which to unzip the files.
	
	4. Switch to the SP2\<LANG>\WIN16 directory, and then type update.
	
	---------------------------------------------------------------------
	Installing Service Pack 2 for the Microsoft Exchange Macintosh Client from
	the Compressed File
	---------------------------------------------------------------------
	There are two ways to install for the Macintosh client.
	
	1. Download the SP2_55MA.exe file and unzip it.
	
	2. Copy SP2_55MA.hqx to a Macintosh or a Power Macintosh.
	
	3. Convert the file from BinHex format. (This requires a utility on the
	  Macintosh.)
	
	4. Double-click the SP2_55MA file.
	
	5. Open the Microsoft Exchange folder.
	
	6. Double-click Microsoft Exchange Setup. Follow the instructions.
	
	7. Run Microsoft Exchange. The Profile Wizard guides you through the
	  process of creating a new profile.
	
	-OR-
	
	1. Download SP2_55MA.hqx to a Macintosh or a Power Macintosh.
	
	2. Convert the file from BinHex format. (This requires a utility on the
	  Macintosh.)
	
	3. Double-click the SP2_55MA file.
	
	4. Open the Microsoft Exchange folder.
	
	5. Double-click Microsoft Exchange Setup. Follow the instructions.
	
	6. Run Microsoft Exchange. The Profile Wizard guides you through the
	  process of creating a new profile.
	
	-----------------------------------------------------------------------
	Installing Service Pack 2 for Microsoft Exchange Client Support Files from
	the Compressed File
	-----------------------------------------------------------------------
	
	1. Create an SP2 directory (or use existing).
	
	2. Download the client support file SP2_55SU.exe into the SP2 directory.
	
	3. At the Windows NT command prompt, switch to the unpack location, and
	  type the file name to bring up the Self-extracting menu. From the menu
	  select the folder in which to unzip the files.
	
	The client support file includes the following five directories under the
	SP2\<LANG>\Support directory:
	
	- The Language pack. Located in the SP2\<LANG>\Support\Langpack\Nta and
	  SP2\<LANG>\Support\Langpack\Ntx directory.
	
	- The Schedule+ Exchange Transport DLL installation program. Located in
	  the SP2\<LANG>\Msoutl directory. This driver enables you to open
	  Microsoft Outlook calendars from within Schedule+ 7.x. It works only
	  with Windows NT or Windows 95 versions of Schedule+ 7.x. You must also
	  be using Microsoft Exchange Server.
	
	- The Advanced Security patch Olcsp40.exe updates the Outlook 98 security
	  feature. Located in SP2\<LANG>\Support\Update\Advsec.
	
	- The SMIME program updates. Located in the
	  SP2\<LANG>\Support\Update\SMIME directory. The enclosed files are
	  discussed in detail in the server Readme enclosed in the file
	  SP2_55RE.exe.
	
	- The Updated Patch for Outlook 98 Security Issue. Located in
	  SP2\<LANG>\Support\Update\Attachmt directory. The directory includes a
	  Readme with additional information.
	
	--------------------------------------------------------------------
	Installing Service Pack 2 Server Update from the Compressed Files
	--------------------------------------------------------------------
	
	1. Make a complete backup of your Microsoft Exchange Server computer.
	  Verify that it is done.
	
	2. Create an SP2 directory (or use existing).
	
	3. Download the compressed Setup file appropriate for your hardware
	  platform into the SP2 directory.
	
	  Select one of these files as appropriate:
	
	      Alpha AXP              SP2_550A.EXE
	      Intel                  SP2_550I.EXE
	
	4. Download the compressed Support file appropriate for your hardware
	  platform into the SP2 directory.
	
	  Select one of these files as appropriate:
	
	      Alpha AXP              SP2S550A.EXE
	      Intel                  SP2S550I.EXE
	
	5. At the Windows NT command prompt, switch to the unpack location, and
	  type the file name to bring up the Self-extracting menu. From the menu,
	  select the folder in which to unzip the files.
	
	6. Switch to the SP2\ENG\Server\Setup\I386 or SP2\ENG\Server\Setup\Alpha
	  directory (depending on whether you have an Intel or Alpha AXP
	  processor).
	
	7. Type "Update", and then follow the instructions displayed on the screen.
	
	Additional query words: servpack bug fix
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
