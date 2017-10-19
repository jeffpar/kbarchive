---
layout: page
title: "Q154172: How To Pass Binary Data Between an ActiveX Control and VB"
permalink: /kb/154/Q154172/
---

## Q154172: How To Pass Binary Data Between an ActiveX Control and VB

	Article: Q154172
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbole kbCtrl
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article will demonstrate how to pass an array of bytes between Visual Basic
	and an ActiveX (OLE) Control. This is accomplished by creating a method that
	takes a VARIANT parameter that will contain a SafeArray of bytes.
	
	MORE INFORMATION
	================
	
	Exchanging data in this manner is useful for both raw data and as a technique
	for passing data structures.
	
	WARNING: Passing data structures in this manner can pose problems if it contains
	pointers.
	
	Sample Code
	-----------
	
	     /* Compile options needed : None
	     */ 
	
	     // Automation method in the control BinData.
	     void CBinDataCtrl::VBtoVCtoVB(const VARIANT FAR& Buffer)
	     {
	        // Verify the Variant contains SafeArray of Bytes
	        if (Buffer.vt == (VT_ARRAY | VT_UI1)) {
	           long Dims = SafeArrayGetDim(Buffer.parray);
	           long UpperBounds;
	           long LowerBounds;
	
	           if (Dims == 1) {
	              SafeArrayGetLBound(Buffer.parray, 1, &LowerBounds);
	              SafeArrayGetUBound(Buffer.parray, 1, &UpperBounds);
	
	              // Use LowerBounds and UpperBounds to force a specific
	              // Array size as shown here or they can be used to
	              // dynamically create the buffer.
	              if ((LowerBounds == 0) && (UpperBounds == 512)) {
	                 // Reference pointer for accessing the SafeArray
	                 unsigned char* buff;
	                 // Variable to store the data from the SafeArray
	                 // could be a global variable or member of CBinDataCtrl
	                 // Shown as a local variable for demonstration purpose only
	                 unsigned char m_abBinaryData[512];
	                 SafeArrayAccessData (Buffer.parray, (void**)&buff);
	                 for (int i = 0; i < 512; i++) {
	                    // Handle the binary data in the buffers
	                    // Copying the data passed from VB to VC.
	                    m_abBinaryData[i] = buff[i];
	
	                    // Modifying the data to be passed back to VB
	                    buff[i] = 0;
	                 }
	                 SafeArrayUnaccessData (Buffer.parray);
	                 return;
	              }
	           }
	        }
	        AfxMessageBox ("Invalid parameter passed in VBtoVC method.\n"  +
	                       "The array may only have a single dimension.\n" +
	                       "The array must contain 512 bytes.");
	     }
	
	NOTE: Code for Visual Basic 4.0 where BinData is the name of the control:
	
	        Private Sub Form_Load()
	            Dim buf(512) As Byte
	
	            For i = 0 To 511
	                buf(i) = 50
	            Next i
	
	            BinData1.VBtoVCtoVB buf
	        End Sub
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q122287 Limits of VB 3.0 & Disptest as Automation Controllers
	
	  Q131046 SAMPLE: BINARY: Transfer Binary Data Using OLE Automation
	
	  Q131086 SAMPLE: SAFEARAY: Use of Safe Arrays in Automation
	
	  Q140202 SAMPLE: MFCARRAY: Using Safe Arrays in MFC Automation
	
	  Q122289 Passing Structures in OLE Automation
	
	Microsoft Systems Journal, June 1996, "Q&A OLE" by Don Box.
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10 4.20 kbinf array Visual Basic 4.00 binary data byte
	
	======================================================================
	Keywords          : kbole kbCtrl 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC200 kbVC210 kbVC32bitSearch
	Version           : 2.00 2.10 2.20 4.00 4.10 4.20
	
	=============================================================================
	
