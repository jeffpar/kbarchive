---
layout: page
title: "Q111636: Mac Adm GW: Extracting Gateway Format Data"
permalink: /kb/111/Q111636/
---

## Q111636: Mac Adm GW: Extracting Gateway Format Data

{% raw %}

	Article: Q111636
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use version 3.1d of Microsoft Mail for AppleTalk Networks to add
	gateway recipients, the Extract GW Format button can be used to create a file
	that lists the necessary fields a gateway requires for operation. Using this
	information, the network manager can create a text file containing gateway data,
	which can then be imported into the Mail Data file.
	
	The file the Extract GW Format button creates lists the field names and values
	the gateway requires for operation.
	
	To extract the gateway format data, perform the following steps:
	
	1. Start the Mail Network Administrator program.
	
	2. From the User menu, choose Insert from Text File.
	
	3. Choose Gateway Recipients.
	
	4. Choose Extract GW Format.
	
	5. Select the desired gateway and choose Select.
	
	6. Save the file to any desired location.
	
	7. Exit the Mail Network Administrator.
	
	Once you create the data text file, you can view it using any text editor. The
	format of the file is described below.
	
	Format of Date Text File
	------------------------
	
	The first line in the file created by the Extract GW Format button contains a
	number indicating the number of fields per gateway recipient. Subsequent lines
	contain two four-character codes representing each of the fields and indicating
	their data types.
	
	For example, the record created for the gateway to AppleLink is:
	
	  2
	  UNAM TEXT
	  USID TEXT
	
	In the example above, the first line of the file indicates that there are two
	fields the gateway requires. The second line indicates the first field code is
	UNAM with a data type of TEXT.
	
	Using this information, the network manager can create a simple text file that
	can be used to import gateway recipient information automatically.
	
	The administrator must determine which field each code represents. Each code
	corresponds to an addressing field used by the gateway. These fields are defined
	by the gateway manufacturer, not Microsoft.
	
	There are currently three gateways sold and supported by Microsoft. The gateway
	template records and associated fields are as follows:
	
	Gateway to AppleLink
	--------------------
	
	  Number of Fields: 2
	  Field 1: UNAM ("Recipient Name"), Data type of TEXT,
	  Field 2: USID ("AppleLink Address"), Data type of TEXT.
	
	Gateway to FAX
	--------------
	
	  Number of Fields: 5
	  Field 1: UNAM ("Recipient Name"), Data type of TEXT,
	  Field 2: PHON ("Recipient Phone Number"), Data type of TEXT,
	  Field 3: INST ("Delivery Instructions"), Data type of TEXT
	  Field 4: isFX ("FAX" radio button), Data type NUM0
	  Field 5: isMC ("MAC" radio button), Data type NUM0
	
	Mail Connection Gateway, Version 3.2
	------------------------------------
	
	  Number of Fields: 3
	  Field 1: UNAM ("Friendly Name"), Data type of TEXT
	  Field 2: ATYP ("Address Type"), Data type of TEXT
	  Field 3: USID ("Address"), Data type of TEXT
	
	Mail Connection Gateway, Version 1.0b
	-------------------------------------
	
	  Number of Fields: 2
	  Field 1: UNAM ("Recipient Name"), Data type of TEXT
	  Field 2: USID ("Recipient Address"), Data type of TEXT
	
	
	Additional query words: names addresses find GNU
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	

{% endraw %}
