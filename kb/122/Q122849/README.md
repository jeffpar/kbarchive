---
layout: page
title: "Q122849: CONN: Adding PC Addresses to Mac Address List Via a Text File"
permalink: /kb/122/Q122849/
---

## Q122849: CONN: Adding PC Addresses to Mac Address List Via a Text File

{% raw %}

	Article: Q122849
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create a text file used to import Microsoft
	Mail for PC Networks addresses into the Microsoft Mail for AppleTalk Networks
	server address list.
	
	NOTE: The Mail administrator must use version 3.1d of Mail for AppleTalk Networks
	for this procedure to work.
	
	MORE INFORMATION
	================
	
	Import File Format
	------------------
	
	The procedure for creating a text file for import by the Mail for AppleTalk
	Networks Server is outlined in version 3.1d Release Notes document that ships
	with version 3.1d of Mail for AppleTalk Networks. This article outlines the
	procedure for obtaining the text file format needed by the Mail for AppleTalk
	Networks Network Administrator program by using this program to batch create
	these addresses. (See the heading "Batch Account Creation from a Text File" in
	the 3.1d Release Notes.)
	
	Creating an import text file for the Mail for AppleTalk Networks Server requires
	three fields:
	
	- Friendly Name: This field contains the person's alias or friendly name.
	
	  This name will be the name that appears in the address list for the user.
	
	- Address Type: This field denotes the address type. As an example, Mail for PC
	  Networks uses MS for this field. Other supported gateways are indicated by
	  their type.
	
	- Address: This field contains the full Mail for PC Networks ten-by-ten-by-ten
	  address of the recipient. For example, this field will contain information in
	  the form of Network/Postoffice/Mailbox.
	
	The Mail for AppleTalk Networks Server allows various types of field delimiters.
	The default is a tab. For this article a semicolon is used as the field
	delimiter.
	
	Creating the Text File
	----------------------
	
	1. On your Macintosh, open an empty file with any editor.
	
	2. On a separate line for each address, enter the 3 fields separated by a
	  semicolon.
	
	  For example:
	
	  Administrator;MS;Net/PO/Admin
	
	  where the format is:
	
	  friendly name;address type;network/postoffice/mailbox.
	
	3. Save this file as a text file to the Macintosh's hard drive or the desktop.
	
	4. Start the Mail for AppleTalk Networks Mail Network Administration program for
	  this server. Make sure you are logged in as the Network Manager on this
	  server.
	
	5. From the Users menu, choose Insert From Text File.
	
	6. Click the Gateway Recipients button.
	
	7. Click the Configuration button.
	
	8. Click the Format button and choose ;, and click the OK button.
	
	9. Click the Select Gateway button, and choose the MS Mail Connection. Click
	  Select.
	
	10. Click the Input File button and highlight the file that was created
	  containing the Mail for PC Networks addresses of the format previously
	  described, and click Open.
	
	11. Click the OK button.
	
	12. Click the Add Recipients button to process these transactions.
	
	13. Click the Exit button to leave the window.
	
	For additional information, see the 3.1d Release Notes on the Microsoft Mail for
	AppleTalk Networks disk 1: Server and Utilities. The Microsoft Knowledge Base
	article, Q111636 "Extracting Gateway Format Data" outlines the procedure to
	extract the format required by the mail network admin utility.
	
	Additional query words: 3.1d import text Mail Network admin gateway
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
