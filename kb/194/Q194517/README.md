---
layout: page
title: "Q194517: HOWTO: Use Creatable ADO Recordsets in Visual FoxPro"
permalink: kb/194/Q194517/
---

## Q194517: HOWTO: Use Creatable ADO Recordsets in Visual FoxPro

	Article: Q194517
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.1 SP2,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbMDAC26
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.1 SP2, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often, you find a need for temporary storage for data. ADO 2.x enables you to
	create recordsets on the fly for this purpose.
	
	MORE INFORMATION
	================
	
	The following example creates an ADO recordset with an integer, varchar and date
	field, adds two records to it, and displays the contents of all fields in the
	recordset on the desktop:
	
	     * Demonstrates creating a temporary recordset in ADO
	     * Program creates a recordset, adds an integer, varchar
	     * and date field, adds two records, and displays the
	     * contents of all fields on the desktop
	
	     #DEFINE ADUSECLIENT 3
	     #DEFINE ADLOCKBATCHOPTIMISTIC 4
	     #DEFINE ADINTEGER 3
	     #DEFINE ADVARCHAR 200
	     #DEFINE ADDATE 7
	     #DEFINE ADFLDISNULLABLE 0x00000020
	     #DEFINE ADOPENSTATIC   3
	
	     oRecordSet = CREATEOBJECT("ADODB.Recordset")
	
	     WITH oRecordSet
	        * specify client-side cursors
	        .CURSORLOCATION = ADUSECLIENT
	
	        * add 3 fields
	        .FIELDS.APPEND ("Key", ADINTEGER)
	        .FIELDS.APPEND ("Data1", ADVARCHAR, 40, ADFLDISNULLABLE)
	        .FIELDS.APPEND ("Data2", ADDATE)
	
	        * open the recordset
	        .OPEN(,,ADOPENSTATIC, ADLOCKBATCHOPTIMISTIC)
	
	        * add a couple of records
	        .ADDNEW
	        .FIELDS("Key").VALUE = 1
	        .FIELDS("Data1").VALUE = "String1"
	        .FIELDS("Data2").VALUE = DATE()
	
	        .ADDNEW
	        .FIELDS("Key").VALUE = 2
	        .FIELDS("Data1").VALUE = "Another string"
	        .FIELDS("Data2").VALUE = {^1992/01/06}
	     ENDWITH
	
	     * read the records back
	     oRecordSet.Movefirst
	     DO WHILE ! oRecordSet.EOF
	        ? oRecordSet.FIELDS("Key").VALUE, ;
	           oRecordSet.FIELDS("Data1").VALUE, ;
	           oRecordSet.FIELDS("Data2").VALUE
	        oRecordSet.MoveNext
	     ENDDO
	
	Additional query words: kbVFP600 kbDatabase kbActiveX
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC210SP2 kbMDAC260 kbVFP600
	Version           : WINDOWS:2.1 SP2,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
