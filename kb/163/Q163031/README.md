---
layout: page
title: "Q163031: PRB: Help of VFP ODBC Driver Unclear on INDEX ON Command"
permalink: kb/163/Q163031/
---

## Q163031: PRB: Help of VFP ODBC Driver Unclear on INDEX ON Command

	Article: Q163031
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual FoxPro ODBC Driver Help File has conflicting information on the
	availability of the INDEX ON command.
	
	RESOLUTION
	==========
	
	The INDEX ON command is not supported in the Visual FoxPro ODBC driver. However,
	it is possible to create regular indexes on existing tables, through the ODBC
	driver, using the ALTER TABLE command. To do this create a persistent relation
	to the same table, or another, then break the relationship with the "DROP
	FOREIGN KEY" clause but use the SAVE clause to preserve the tag.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Bring up the Visual FoxPro ODBC Help file by selecting ODBC from the Windows
	Start menu, and selecting "Visual FoxPro ODBC Driver," or by double- clicking
	the file Drvvfp.hlp in the Windows\System or Windows\System32 subdirectory. Go
	to Contents tab, click Technical References, then select "Language Support in
	Rules, Triggers, Default Values, and Stored Procedures." If you look at this
	list of commands and functions supported, INDEX is shown. However, if the hot
	link, located at the top of the page, is taken to the "Unsupported commands and
	functions," INDEX is listed AGAIN.
	
	The INDEX ON command is not supported in the Visual FoxPro ODBC driver.
	
	REFERENCES
	==========
	
	For more information about removing Persistent Relationships, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q130352 How To Remove Table from Persistent Relation with Program
	
	For more information about creating Persistent Relationships, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q130243 How To Create Persistent Relations Using ALTER TABLE SQL
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
