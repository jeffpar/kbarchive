---
layout: page
title: "Q130321: PC MAPI: Attachment Name Must Retain 3 Letter File Extension"
permalink: /kb/130/Q130321/
---

## Q130321: PC MAPI: Attachment Name Must Retain 3 Letter File Extension

	Article: Q130321
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail for PC Networks attachments that are sent from simple Messaging
	Application Program Interface (MAPI) applications should retain the three letter
	file name extension as described in the Microsoft Windows 3.x registry database.
	If the three letter file name extension is not maintained, the application will
	not be launched correctly by accessing the icon associated with the object in
	the Microsoft Mail for Windows. Examples of these extensions include .DOC (Word
	documents), .WKS (Excel worksheet), and .WRI (Write document).
	
	MORE INFORMATION
	================
	
	If the three letter file name extension is not maintained in the code for the
	MapiFile.FileName field (for Microsoft Visual Basic) in the MapiFile structure,
	the following error will be returned from the Windows client:
	
	  No application is associated with the attached file FILENAME.EXT.
	  Use the File Manager to create an association.
	
	This error will occur even if Mail appears to display the application's icon that
	the file belongs to correctly. This information will appear correctly because
	the information for the icon object is in the system attachment WINMAIL.DAT.
	However, Mail does not use WINMAIL.DAT to launch the application associated with
	the file. Instead, Mail uses the standard associations found in the Windows 3.x
	registry database.
	
	NOTE: MapiFileDesc is the equivalence of MapiFile in C.
	
	Additional query words: 3.00 3.20 file extension
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
