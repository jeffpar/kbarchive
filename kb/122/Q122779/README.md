---
layout: page
title: "Q122779: CONN: GW Version 3.2.11 Update"
permalink: kb/122/Q122779/
---

## Q122779: CONN: GW Version 3.2.11 Update

	Article: Q122779
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the GW file that is included with version
	3.2 of Microsoft Mail Connection for PC and AppleTalk Networks.
	
	For complete information about obtaining and installing the GW file, see the
	following sections:
	
	- To download the updated file
	
	- To update your GW file
	
	MORE INFORMATION
	================
	
	This update contains the GW file, a replacement for the GW file included with
	version 3.2 of Microsoft Mail Connection for PC and AppleTalk Networks. This
	update includes the following modifications:
	
	
	- The GW file will handle *Special messages. The *Special messages are
	  generated when the Mail administrator exports a downstream postoffice address
	  list (PAL) to the Connection gateway by selecting External-Admin, Export, All
	  in the Mail Administrator program (ADMIN.EXE) included with Microsoft Mail
	  for PC Networks.
	
	
	  NOTE: Previously these messages were not recognized by the Connection gateway
	  and would be returned to the originating postoffice. As a result, the
	  postoffice address list would be added to the MACNET\MACPO address list on
	  the originating postoffice. When the global address list (GAL) was rebuilt,
	  the local users would appear in the GAL twice. One address would reference
	  the local postoffice, and the other address would reference the MACNET\MACPO
	  proxy postoffice. The Connection GW will no longer return these messages to
	  the originating postoffice.
	
	- The GW file will successfully transfer multiple attachments when you use Mail
	  for PC Networks to connect two Microsoft Mail for AppleTalk Networks servers
	  and one of the attachments has a filename greater than 13 characters.
	
	
	- The GW file will successfully transfer multiple attachments when you use Mail
	  for PC Networks to connect two Mail for AppleTalk Networks servers and one of
	  the attachments has a space embedded in the attachment's name (for example,
	  Read Me).
	
	- The GW file will generate a non-delivery report (NDR) notifying mail users
	  that the recipient at an unknown or invalid address did not receive their
	  message. Also, if a message is sent to the Bad Mail folder due to an invalid
	  address, the message will not be deleted; the sender will receive an NDR.
	
	- If you use a modified 80-column form where the only modification is the Form
	  ID, your message will be corrupt when you send it to a Mail for PC Networks
	  user. The updated GW will no longer corrupt the message.
	
	
	- When a Mail for PC Networks user sends a message to several Mail for
	  AppleTalk Networks users via the Mail Connection Gateway and one or more of
	  the native AppleTalk Mail addresses are invalid (for example, baduser@macmail
	  is not a valid address), the message is not delivered to any AppleTalk user,
	  and a non-delivery report is sent to the sender.
	
	
	- If your Mail for AppleTalk Servers are using a Mail for PC Networks backbone
	  to communicate and a message is sent from one Macintosh server to another
	  with an attachment that has a name ending in a hyphen (for example,
	  TEST.DOC-), the receiving Macintosh will crash upon receipt of the message.
	  The updated GW will no longer crash the receiving Macintosh.
	
	
	- On a Windows client for HP Open Mail, replying to or forwarding a message
	  from the Macintosh causes Mail Connection Gateway to hang. The updated GW no
	  longer hangs the gateway.
	
	
	To download the updated file
	----------------------------
	
	You can find GWUPD.HQX, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile GWUPD.HQX, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get GWUPD.HQX
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download GWUPD.HQX.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	You should receive the following files:
	
	  GW (137,097 bytes, dated 06-06-95, 4:48 P.M.)
	  README.TXT
	
	To update your GW file
	----------------------
	
	NOTE: The GW file is in a self-extracting archive (.SEA) format as well as in
	Bin-Hex (.HQX) format to allow you to use an MS-DOS-formatted disk. To access
	the workstation software, you need to decode the file using a decoding utility,
	such as StuffIt or Compact Pro. These utilities can be found on most major
	bulletin boards.
	
	From an IBM or compatible computer
	----------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\gwupd.hqx <destination> " (without the quotation
	  marks)
	
	  where <drive> is the drive and directory where you downloaded the
	  GWUPD.HQX file and <destination> is the drive and directory where your
	  postoffice currently resides. For example, if you downloaded the file to the
	  TEST directory on drive D and the postoffice is located in the MAILDATA
	  directory on drive C, type the following command:
	
	  " copy d:\test\gwupd.hqx c:\maildata " (without the quotation marks)
	
	2. From the gateway server Macintosh, mount the postoffice volume (the volume
	  may already be mounted for gateway access) and copy the GWUPD.HQX file to the
	  Macintosh's hard disk.
	
	3. From the gateway server Macintosh, use one of the decoding utilities, such as
	  StuffIt or Compact Pro, to decode the file into its original format by doing
	  the following:
	
	   - To use StuffIt or StuffIt Expander: From the Other menu, choose Bin- Hex.
	     Then select Decode Bin-Hex File.
	
	     -or-
	
	   - To use Compact Pro: From the Misc menu, choose Convert FROM BinHex4.
	
	  NOTE: Both utilities will generate a Macintosh-formatted file called GWUPD.SEA
	  in the same location as the original file.
	
	4. The GWUPD.SEA file is a self-extracting archive file. Double-click the icon
	  to extract the updated GW file.
	
	  See the "To update the gateway on the AppleTalk Mail gateway server" section
	  below.
	
	From an Apple Macintosh
	-----------------------
	
	1. If you download GWUPD.SEA, go to step 2.
	
	  If you download the .HQX file, use one of the decoding utilities, such as
	  StuffIt or Compact Pro, to decode the file into its original format by doing
	  the following:
	
	   - To use StuffIt: From the Other menu, choose Bin-Hex. Then select Decode
	     Bin-Hex File.
	
	     -or-
	
	   - To use Compact Pro: From the Misc menu, choose Convert FROM BinHex4.
	
	  NOTE: Both utilities will generate a Macintosh file called GWUPD.SEA in the
	  same location as the original file.
	
	2. Copy the file to the AppleTalk Mail gateway server. Double-click the icon to
	  extract the updated GW file.
	
	  See the "To update the gateway on the AppleTalk Mail gateway server" section
	  below.
	
	To update the gateway on the AppleTalk Mail gateway server
	----------------------------------------------------------
	
	1. From the Apple menu, choose Microsoft Mail, and then sign in as the Network
	  Manager. If you are already signed in as Network Manager, you can skip this
	  step.
	
	2. On the gateway server hard disk, open the MS Mail Connection 3.2 folder.
	
	3. Open the Connection Installer folder and double-click the Connection
	  Installer icon.
	
	4. In the Gateways Installed On This Server box, select the MS Mail Connection
	  gateway.
	
	5. From the Gateway menu, choose Update Gateway.
	
	6. When the Select A Gateway Update File dialog box appears, select the GW file
	  extracted in the procedure above and choose the Update button.
	
	7. When the Please Pick The Gateway Templates To Install dialog box appears,
	  select the templates for any Mail for PC Networks gateways you want to
	  exchange mail, and then choose the OK button.
	
	8. From the File menu, choose Quit to exit the Connection Installer.
	
	9. Return to Mail for AppleTalk Networks, still signed in as the Network
	  Manager, and choose Gateway Configuration from the Mail menu. If you have
	  more than one gateway installed, select the Connection icon from the left
	  side of the Gateway Configuration dialog box.
	
	10. When the Please Locate The Connection Store (MacGate) Directory dialog box
	  appears, choose the OK button.
	
	11. When the Directory dialog box appears, locate the folder containing the Mail
	  data files on the Mail for PC Networks gateway postoffice and double-click
	  the MacGate folder.
	
	12. When the Gateway Configuration dialog box appears, choose the Update button.
	  A message will appear on the screen to indicate "Writing the MACGATE.INI
	  File to the Connection Store." Click the close box or press ESC to close the
	  dialog box.
	
	  NOTE: You will not lose Gateway Recipients, and it is not necessary to update
	  the access servers. Only the gateway server update is required.
	
	Additional query words: 3.20 gateway list fix fixes
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
