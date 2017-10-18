---
layout: page
title: "Q122778: CONN: Connection Name Utility (CNU) 3.4 Update"
permalink: kb/122/Q122778/
---

## Q122778: CONN: Connection Name Utility (CNU) 3.4 Update

	Article: Q122778
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the Connection Name Utility (CNU)
	application that is included with version 3.2 of Microsoft Mail Connection for
	PC and AppleTalk Networks.
	
	For complete information about obtaining and installing the CNU file, see the
	following sections:
	
	- To download the updated file
	
	- To update your CNU file
	
	MORE INFORMATION
	================
	
	This update contains the Microsoft Mail Connection Name Utility (CNU)
	application for the Macintosh, a replacement file for the Mail Connection CNU
	application included with version 3.2 of Microsoft Mail Connection for PC and
	AppleTalk Networks. This update includes the following modifications:
	
	- The CNU no longer increments the T3 date upon startup if there are no
	  directory synchronization (Dir-Sync) messages waiting in the Network
	  Manager's mailbox to be processed.
	
	
	- The CNU no longer reports "Bad Message Class" when a template is sent from
	  the Dir-Sync server. The template information (which cannot be displayed by
	  the AppleTalk Mail workstation) is now ignored when the CNU processes the
	  update.
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Cnuupd.hqx now
	  (http://download.microsoft.com/download/pcmail/Utility/1/MacOS/EN-US/Cnuupd.hqx)
	
	Release Date: 09-08-94
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	To update your CNU file
	-----------------------
	
	NOTE: The CNU file is in a self-extracting (.SEA) archive format as well as in
	Bin-Hex (.HQX) format to allow you to use an MS-DOS- formatted disk. To access
	the updated CNU file, you need to decode the file using a utility such as
	StuffIt or Compact Pro. These utilities can be found on most major bulletin
	boards.
	
	From an IBM or compatible computer
	----------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  "copy <drive>:\cnuupd.hqx <destination>" (without the quotation
	  marks)
	
	  where <drive> is the drive and directory where you downloaded the
	  CNUUPD.HQX file and <destination> is the drive and directory where your
	  postoffice currently resides. For example, if you downloaded the file to the
	  TEST directory on drive D and the postoffice is located in the MAILDATA
	  directory on drive C, type the following command:
	
	  "copy d:\test\cnuupd.hqx c:\maildata" (without the quotation marks)
	
	2. From the gateway server Macintosh, mount the postoffice volume (the volume
	  may already be mounted for gateway access) and copy the CNUUPD.HQX file to
	  the Macintosh's hard disk.
	
	3. From the Macintosh used to run the CNU, use one of the decoding utilities,
	  such as StuffIt or Compact Pro, to decode the file into its original format
	  by doing the following:
	
	  NOTE: Both utilities will generate a Macintosh-formatted file called
	  CNUUPD.SEA in the same location as the original file.
	
	   - To use StuffIt: From the Other menu, choose Bin-Hex. Then select Decode
	     Bin-Hex File.
	
	     -or-
	
	   - To use Compact Pro: From the Misc menu, choose Convert FROM BinHex4.
	
	4. The CNUUPD.SEA file is a self-extracting archive file. Double-click the icon
	  to extract the updated CNU application.
	
	5. Copy the extracted CNU application to the location of the previous version of
	  the CNU.
	
	From an Apple Macintosh
	-----------------------
	
	1. If you download CNUUPD.SEA, go to step 2.
	
	  If you download the .HQX file, use one of the decoding utilities, such as
	  StuffIt or Compact Pro, to decode the file into its original format by doing
	  the following:
	
	   - To use StuffIt: From the Other menu, choose Bin-Hex. Then select Decode
	     Bin-Hex File.
	
	     -or-
	
	   - To use Compact Pro: From the Misc menu, choose Convert FROM BinHex4.
	
	  NOTE: Both utilities will generate a Macintosh file called CNUUPD.SEA in the
	  same location as the original file.
	
	2. Copy the CNUUPD.SEA file to the CNU machine. Double-click it to extract the
	  CNU application.
	
	3. Copy the extracted CNU application to the location of the previous version of
	  the CNU.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
