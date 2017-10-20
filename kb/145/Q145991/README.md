---
layout: page
title: "Q145991: HOWTO: Inserting an OLE Object into a SQL Table by Using SPT"
permalink: /kb/145/Q145991/
---

## Q145991: HOWTO: Inserting an OLE Object into a SQL Table by Using SPT

{% raw %}

	Article: Q145991
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp300b kbvfp600
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to place OLE information into a SQL table by using the
	SQL Pass Through (SPT) function SQLEXEC(). To achieve this, you need to pass the
	field as a parameter instead of passing a file name value.
	
	MORE INFORMATION
	================
	
	To place an OLE object such as a .wav or an .avi file into an Image field in a
	SQL table, you need to store it in a Visual FoxPro general field, and then call
	INSERT INTO to insert the general field in an Image field. For example, you can
	use the following syntax if you have a connection to a data source and you want
	to store the OLE information to an image field named imagfld:
	
	     = SQLEXEC(mhandle,"INSERT INTO test(field1,imagfld);
	         VALUES('Sound',?table.g_fld)")
	
	In this example, the field name of the local table is passed as a parameter to
	the server. This ensures that Visual FoxPro preserves the binary format of the
	OLE object.
	
	Note that if you pass the .wav file name in the INSERT command and bring the
	information back to Visual FoxPro, the error "OLE Object is invalid" is
	displayed when you click the General field. If you have an OLE object that is
	not stored in a .dbf file, you can create a temporary cursor and store the file
	in a cursor before you upload it. For example:
	
	     CREATE CURSOR tmpole (g_fld G)
	     APPEND BLANK
	     APPEND GENERAL g_fld FROM "C:\win95\media\chimes.wav"
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
