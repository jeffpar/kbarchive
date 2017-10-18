---
layout: page
title: "Q122780: Mac OOF: Out of Office Server Update"
permalink: kb/122/Q122780/
---

## Q122780: Mac OOF: Out of Office Server Update

	Article: Q122780
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the Out of Office Server (OOF Server) file
	that is included with version 3.1d of Microsoft Mail for AppleTalk Networks.
	
	For complete information about obtaining and installing the OOF Server file, see
	the following sections:
	
	- To download the updated file
	
	- To update your OOF Server file
	
	MORE INFORMATION
	================
	
	This update contains Out of Office Server (OOF Server), a replacement for the
	Out of Office Server file included with version 3.1d of Microsoft Mail for
	AppleTalk Networks. This update corrects the following problems:
	
	- The error "No background field 'Password'" will not stop the processing of
	  the OOF Server.
	
	- The error "No such card" will not stop the processing of the OOF Server.
	
	- Mail server names that include commas can now be registered in the Configured
	  Servers list.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Ofupd.hqx
	
	Release Date: Oct-17-1994
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	To update your OOF Server file
	------------------------------
	
	  NOTE: Currently, no automated solution is available to migrate users from one
	  OOF Server stack to another.
	
	Before you replace your OOF Server, you should notify users that they will need
	to re-register with the OOF Server after the update is complete. Or, you can
	follow the instructions under the heading, "Manually Migrating Users' Accounts
	Between OOF Servers," to migrate users to the new stack.
	
	NOTE: The OOF Server file is in a self-extracting archive (.SEA) format as well
	as in Bin-Hex (.HQX) format to allow you to use an MS-DOS- formatted disk. To
	access the workstation software, you need to decode the file using a decoding
	utility, such as StuffIt or Compact Pro. These utilities can be found on most
	major bulletin boards, such as America Online and AppleLink.
	
	1. If you download MACLIENT.SEA, go to step 2.
	
	  If you download the .HQX file, use one of the decoding utilities, such as
	  StuffIt or Compact Pro, to decode the file into its original format by doing
	  the following:
	
	   - To use StuffIt: From the Other menu, choose Bin-Hex. Then select Decode
	     Bin-Hex File.
	
	  -or-
	
	   - To use Compact Pro: From the Misc menu, choose Convert FROM BinHex4.
	
	  The utility will generate a Macintosh file called OOFUPD.SEA in the same
	  location as the original file.
	
	2. Double-click the OOFUPD.SEA to extract the updated OOF Server file.
	
	3. Locate your current Out of Office Server stack. If the stack is running, stop
	  processing, and quit HyperCard.
	
	4. Rename the existing Out of Office Server to Out of Office Server.old.
	
	5. Drag the Out of Office Server file from where you ran the self- extracting
	  file to the desired location on your hard disk.
	
	6. Double-click the new Out of Office Server file and reconfigure.
	
	For more information about how to configure the Out of Office Server, see the Out
	of Office Server documentation.
	
	Manually Migrating Users' Accounts Between OOF Servers
	------------------------------------------------------
	
	Because each user's account is stored on a separate card in the OOF Server
	database, you can move the accounts by copying and pasting cards from one stack
	to another.
	
	1. Open the old OOF Server in HyperCard.
	
	2. From the File menu, choose Open Stack. Select the Open Stack In New Window
	  check box. Locate the new copy of the OOF Server stack and click Open.
	
	3. From the Main screen on the New stack, click the DataBase button to move to
	  the blank database card.
	
	4. Switch back to the old copy of the stack. Click the DataBase button to move
	  to the blank database card. Use the Next button to move to the first user in
	  the database.
	
	5. From the Edit menu, choose Copy Card.
	
	6. Switch to the new stack, confirm that the first database card is still
	  showing, and choose Paste Card from the Edit menu.
	
	7. Complete steps 4-6 for each user in the database.
	
	8. Reconfigure the stack using the Configuration screen.
	
	Additional query words: 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	
