---
layout: page
title: "Q191013: XGEN: README.TXT: Microsoft Exchange 5.5 U.S. Service Pack 1"
permalink: /kb/191/Q191013/
---

## Q191013: XGEN: README.TXT: Microsoft Exchange 5.5 U.S. Service Pack 1

{% raw %}

	Article: Q191013
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55 exc55sp1
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the Readme.txt file that accompanies the Microsoft Exchange
	Server version 5.5 U.S. Service Pack 1.
	
			Microsoft Exchange Server Version 5.5
				    Service Pack 1
	
	---------------------------------------------------------------------
	To install the entire Service Pack 1 update from the compressed files
	---------------------------------------------------------------------
	1. Create a directory SP1 on your local hard drive.
	
	2. Download all of the compressed files in the 
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/<LANG>/Exchg 5.5/sp1/server 
	
	  directory into the new SP1 directory. 
	
	3. At the Windows NT command prompt, switch the unpack location in your SP1
	  directory and type the filename to bring up the Self-extracting menu. 
	
	4. At the Self-extracting menu, type the location of the SP1 folder in the
	  "Unzip to folder" text box. Then select the "Unzip" button. Once the
	  process is completed select "OK",  and then select "Close".
	
	  These files are provided for Exchange Server 5.5 Service Pack 1:
	
	     Server update for Alpha                  SP1_550A.EXE
	     Server update for Intel                  SP1_550I.EXE
	     Chat server update for Alpha             SP1_55CA.EXE
	     Chat server update for Intel             SP1_55CI.EXE
	     Documentation                            SP1_55DC.EXE
	     HTML Form Converter                      SP1_55FO.EXE
	     Server support files (cluster,KMS,etc)   SP1_55SS.EXE
	     Exchange connector installation          SP1_55XC.EXE
	     Server symbols for Alpha                 SP1S550A.EXE
	     Server symbols for Intel                 SP1S550I.EXE
	     Chat server symbols for Alpha            SP1S55CA.EXE
	     Chat server symbols for Intel            SP1S55CI.EXE
	     Readme and HTML file                     SP1_55RE.EXE
	
	5. Perform steps 3 and 4 for each file you need. 
	
	You need all files if you want to use the Readme.htm to access Service Pack
	1. The Readme.rtf and Readme.htm will refer to these files in the SP1 
	directory as being located in the CD-ROM drive.  
	
	For detailed information about Exchange Server 5.5 SP1 see the enclosed 
	server Readme in the file SP1_55RE.exe.
	
	-----------------------------------------------------------------
	To install the Service Pack 1 Windows 16-bit client update from the
	compressed file
	-----------------------------------------------------------------
	1. Create an SP1 directory (or use existing).
	
	2. Download the compressed client file appropriate for your hardware 
	  platform into the SP1 directory. 
	
	Select the following file:
	
	   Windows client for 16-bit      SP1_55WI.EXE
	
	3. At the Windows NT command prompt, switch to the unpack location, and
	  type the filename to bring up the Self-extracting menu. From the menu
	  select the folder in which to unzip the files.
	
	4. Switch to the SP1\EN\WIN16 directory, and then type update.
	
	---------------------------------------------------------------------
	To install Service Pack 1 for the Microsoft Exchange Macintosh client 
	from a compressed file
	---------------------------------------------------------------------
	There are two ways to install for the Macintosh client.
	
	1.  Download the SP1_55MA.exe file and unzip it.
	
	2.  Copy SP1_55MA.hqx to a Macintosh or a Power Macintosh.
	
	3.  Convert the file from BinHex format. (This requires a utility on the
	   Macintosh.)
	
	4.  Double-click the SP1_55MA file.
	
	5.  Open the Microsoft Exchange folder.
	
	6.  Double-click Microsoft Exchange Setup. Follow the instructions.
	
	7.  Run Microsoft Exchange. The Profile Wizard guides you through the process
	   of creating a new profile.
	
	-OR-
	
	1.  Download SP1_55MA.hqx to a Macintosh or a Power Macintosh.
	
	2.  Convert the file from BinHex format. (This requires a utility on the
	   Macintosh.)
	
	3.  Double-click the SP1_55MA file.
	
	4.  Open the Microsoft Exchange folder.
	
	5.  Double-click Microsoft Exchange Setup. Follow the instructions.
	
	6.  Run Microsoft Exchange. The Profile Wizard guides you through the process
	   of creating a new profile.
	
	-----------------------------------------------------------------------
	To install Service Pack 1 for Microsoft Exchange client support files 
	from a compressed file
	-----------------------------------------------------------------------
	
	1. Create an SP1 directory (or use existing).
	
	2. Download the client support file SP1_55SU.exe into the SP1 directory.
	
	3. At the Windows NT command prompt, switch to the unpack location, and 
	  type the filename to bring up the Self-extracting menu. From the menu
	  select the folder in which to unzip the files.
	
	The client support file includes the following three directories under
	the SP1\EN\Support directory:
	
	- The Language pack. Located in the SP1\EN\Support\Langpack\Nta and
	  SP1\EN\Support\Langpack\Ntx directory.
	
	- The Schedule+ Exchange Transport DLL installation program. Located in
	  the SP1\EN\Msoutl directory. This driver enables you to open Microsoft
	  Outlook calendars from within Schedule+ 7.x. It works only with
	  Windows NT or Windows 95 versions of Schedule+ 7.x. You must also be
	  using Microsoft Exchange Server. 
	
	- The SMIME program updates. Located in the SP1\EN\Support\Update
	  directory. The enclosed files are discussed in detail in the server
	  Readme enclosed in the file SP1_55RE.exe. 
	
	--------------------------------------------------------------------
	To install Service Pack 1 server update from the compressed files
	--------------------------------------------------------------------
	
	1. Make a complete backup of your Microsoft Exchange Server computer. 
	  Verify that it is done.
	
	2. Create an SP1 directory (or use existing).
	
	3. Download the compressed Setup file appropriate for your hardware
	  platform into the SP1 directory. 
	
	Select one of these files as appropriate:
	
	Alpha AXP		SP1_550A.EXE
	Intel			SP1_550I.EXE
	
	4. Download the compressed Support file appropriate for your hardware
	  platform into the SP1 directory. 
	
	Select one of these files as appropriate:
	
	Alpha AXP		SP1S550A.EXE
	Intel			SP1S550I.EXE
	
	5. At the Windows NT command prompt, switch to the unpack location, and
	  type the filename to bring up the Self-extracting menu. From the menu
	  select the folder in which to unzip the files.
	
	6. Switch to the SP1\ENG\Server\Setup\I386 or SP1\ENG\Server\Setup\Alpha
	  directory (depending on whether you have an Intel or Alpha AXP
	  processor).
	
	7. Type Update, and then follow the instructions displayed on the screen.
	
	Additional query words: servpack bug fix
	
	======================================================================
	Keywords          : exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
