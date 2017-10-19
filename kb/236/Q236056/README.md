---
layout: page
title: "Q236056: FIX: DAO 3.6 Overruns Buffers in GetRowsEx Method"
permalink: /kb/236/Q236056/
---

## Q236056: FIX: DAO 3.6 Overruns Buffers in GetRowsEx Method

	Article: Q236056
	Product(s): Microsoft C Compiler
	Version(s): winnt:3.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSDKDAO kbGrpDSVCDB kbDAO360 kbDAO360bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, used with:
	   - The DAO SDK, version 3.6 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, used with:
	   - The DAO SDK, version 3.6 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, used with:
	   - The DAO SDK, version 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The character buffer allocated for string data is overrun when using the DAO SDK
	and the GetRowsEx method in non-unicode builds. There are two ways character
	data can be fetched as described in the GetRows DAO SDK sample.
	
	When using the dbBindSTRING method the buffer is allocated dynamically, and the
	error message is as follows:
	
	  DAMAGE: after Normal block(#89) at <hex address>
	
	-or-
	
	  DAMAGE: after Normal block(#99) at <hex address>
	
	When using the dbBindLPSTRING method some data can return truncated, not
	terminated by a null character, or garbled.
	
	CAUSE
	=====
	
	DAO version 3.6 incorrectly overwrites the character buffer supplied to it by
	the application when it fetches text data. It first copies the UNICODE string
	into the buffer which is twice as long as the length of the buffer and then
	converts the string to an ANSI string.
	
	RESOLUTION
	==========
	
	To work around this problem, allocate twice the space necessary if the direct
	binding method is used, or allocate enough space for an extra record if the
	indirect method is used as described in the "More Information" section.
	
	This problem has been fixed in DAO 3.60 version 3.60.3714.5. To obtain the
	updated DAO 3.60 dll, please install Microsoft Jet 4.0 Service Pack 4 (SP4) or
	later. For additional information, see the following article:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Jet 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the GetRows sample from the DAOSDK, which comes with Windows platform
	  SDK.
	
	2. Go to Project Settings under the Link tab and change the .lib file used from
	  Ddao35d.lib to Ddao36d.lib to utilize DAO version 3.6 instead of DAO version
	  3.5.
	
	  NOTE: In order to get Ddao36d.lib and Ddao36d.dll, you will have to compile
	  and create them by using DAO workspace for DAO 3.6. This workspace comes with
	  Visual Studio Service Pack 3. Information on how to get Visual Studio SP3 is
	  given at the end of this article.
	
	3. In the Getrdlg.h file change the number of records fetched from ten to four:
	
	  #define MAX_EMP_REC		4 // Arbitrary maximum
	
	4. Go to the Getrdlg.cpp file. The EMP typedef is located just after the
	  definition of the DoGetRows() function. In EMP typedef structure, change the
	  size of array strFirstName from twenty to eight. The correct code is as
	  follows:
	
	  typedef struct
	  	{
	  	LONG	lEmpId;
	  	TCHAR	*strLastName;
	  	TCHAR	strFirstName[8];
	  	} EMP, *LPEMP ;
	
	5. Also, make a change in the Bindings structure, which is located right after
	  EMP structure. Change the size of strFirstName from twenty to eight. This is
	  the correct code:
	
	  // Employee table binding 
	  DAORSETBINDING	Bindings[] = 
	  {
	  //Index Type		Column		Type			Offset						Size
	  {dbBindIndexINT,	EMP_ID,		dbBindI4,		offsetof(EMP,lEmpId),		sizeof(LONG)},
	  {dbBindIndexINT,	EMP_LNAME,	dbBindLPSTRING,	offsetof(EMP,strLastName),	sizeof(TCHAR *)},
	  {dbBindIndexINT,	EMP_FNAME,	dbBindSTRING,	offsetof(EMP,strFirstName),	sizeof(TCHAR) * 8}
	  };
	
	6. In the Getrdlg.cpp file change the size of the character buffer that will
	  hold the variable size data from MAX_EMP_REC * 15 to 33. The buffer is
	  declared in the beginning of the DoGetRowsEx() function.
	
	  TCHAR			pBuf[33];		// allow average of 15 chars/name
	
	7. Compile and run the code. Select the Employee.mdb file (located in
	  \mssdk\samples\DBMsg\DataAccess\DAO) after clicking Execute. A Debug error
	  dialog will appear with the above described message.
	
	8. To avoid the debug error, comment out the line that deletes the pEmpRows
	  array at the end of the DoGetRowsEx function:
	
	  //delete [] pEmpRows;
	
	9. Recompile the code and run it again. The fourth name will be truncated in the
	  dialog box.
	
	Workaround
	----------
	
	When retrieving the character data directly with the dbBindSTRING type, allocate
	twice as much space than the maximum size of the field in the custom structure.
	Change the size of strFirstName to twenty in both structures as follows:
	
	  typedef struct
	  	{
	  	LONG	lEmpId;
	  	TCHAR	*strLastName;
	  	TCHAR	strFirstName[20];
	  	} EMP, *LPEMP ;
	
	  // Employee table binding 
	  DAORSETBINDING	Bindings[] = 
	  {
	  //Index Type		Column		Type			Offset						Size
	  {dbBindIndexINT,	EMP_ID,		dbBindI4,		offsetof(EMP,lEmpId),		sizeof(LONG)},
	  {dbBindIndexINT,	EMP_LNAME,	dbBindLPSTRING,	offsetof(EMP,strLastName),	sizeof(TCHAR *)},
	  {dbBindIndexINT,	EMP_FNAME,	dbBindSTRING,	offsetof(EMP,strFirstName),	sizeof(TCHAR) * 20}
	  };
	
	When retrieving the character data indirectly into a buffer for variable length
	data with dbBindLPSTRING, allocate the buffer big enough to hold an extra record
	and two extra Unicode null characters (4 bytes). So make this change to the size
	of pBuf character buffer:
	
	  TCHAR			pBuf[(MAX_EMP_REC + 1) * 20 + 4];// allow average of 15 chars/name
	
	Recompile and run the code.
	
	REFERENCES
	==========
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	  Q235507 FIX: DAO 3.6 Causes Debug Errors in MFC DAO Non-Unicode Builds
	  [visualc]
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSDKDAO kbGrpDSVCDB kbDAO360 kbDAO360bug 
	Component         : dao
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:3.6,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
