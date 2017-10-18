---
layout: page
title: "Q138205: HOWTO: Use OLE Automation with Microsoft Word"
permalink: kb/138/Q138205/
---

## Q138205: HOWTO: Use OLE Automation with Microsoft Word

	Article: Q138205
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600 kbWord
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates using OLE Automation in Visual FoxPro to send data
	from a table to a Microsoft Word document. The example requires that Microsoft
	Word 6.0 or later be installed on the same computer as Visual FoxPro. This
	example consists of two basic steps: creating the mail merge document in
	Microsoft Word and writing the program to perform the OLE automation in Visual
	FoxPro.
	
	MORE INFORMATION
	================
	
	1. Create the mail merge document in Microsoft Word. Start with a new document
	  in Microsoft Word. Format the Document as follows:
	
	     Contact
	     Company
	     Phone
	
	     Dear greeting,
	
	     <This is the body of the form letter.>
	
	     Sincerely,
	
	     <Your Company Name>
	
	  Create bookmarks for Contact, Company, Phone, and greeting. To do this, select
	  the item in the document (for example, Contact), choose the Edit menu pad
	  (it[ASCII 146]s the Insert menu pad in Word 97), and click the Bookmark menu
	  item. Enter the bookmark name (for example, contact), and click Add. The
	  bookmark name should be the same as the item selected. Repeat this for all
	  four items. Save the Microsoft Word Document as Wordole.doc in the
	  Vfp\Samples\Data directory.
	
	2. Create the OLE Automation program in Visual FoxPro. Create a new program in
	  Visual FoxPro with the following code:
	
	  If you are using Word 6.0 or Word 95, use the following code:
	
	  
	
	       PUBLIC oWordObj, ver_info
	
	        ver_info=IIF("06."$VERSION(),6,5)
	        IF ver_info=6
	           OPEN DATA home(2)+"data\TestData.dbc"
	        else
	           OPEN DATA SYS(2004)+"\samples\data\TestData.dbc"
	        endif
	        USE Customer
	
	        oWordObj=CREATEOBJECT("Word.Basic")
	
	        IF ver_info=6
	           oWordObj.FileOpen (home(2)+"data\wordole.doc")
	        ELSE
	           oWordObj.FileOpen (SYS(2004)+"samples\data\wordole.doc")
	        ENDIF
	
	        oWordObj.EditGoto ("contact")
	        oWordObj.Insert (Customer.Contact)
	        oWordObj.EditGoTo ("company")
	        oWordObj.Insert (Customer.Company)
	        oWordObj.EditGoTo ("phone")
	        oWordObj.Insert (Customer.Phone)
	        oWordObj.EditGoTo ("greeting")
	        oWordObj.Insert (Customer.Contact)
	
	        oWordObj.FilePrint
	
	  If you are Word 97, use the following code:
	
	  
	
	        PUBLIC oWordObj, ver_info
	
	        ver_info=IIF("06."$VERSION(),6,5)
	        IF ver_info=6
	           OPEN DATA home(2)+"data\TestData.dbc"
	        else
	           OPEN DATA SYS(2004)+"\samples\data\TestData.dbc"
	        endif
	        USE Customer
	
	        oWordObj=CREATEOBJECT("Word.Basic")
	
	        IF ver_info=6
	           oWordObj.FileOpen (home(2)+"data\wordole.doc")
	        ELSE
	           oWordObj.FileOpen (SYS(2004)+"samples\data\wordole.doc")
	        ENDIF
	
	        oWordObj.ww7_EditGoto ("contact")
	        oWordObj.Insert (Customer.Contact)
	        oWordObj. ww7_EditGoTo ("company")
	        oWordObj.Insert (Customer.Company)
	        oWordObj. ww7_EditGoTo ("phone")
	        oWordObj.Insert (Customer.Phone)
	        oWordObj. ww7_EditGoTo ("greeting")
	        oWordObj.Insert (Customer.Contact)
	
	        oWordObj.FilePrint
	
	3. Save and run the program.
	
	RESULT: When you run the program, the form letter should print using data from
	record one in the Customer table.
	
	By removing the Open Data and Use Customer commands, you could call this program
	from a form that was based on the customer table. If the program is called from
	the click event of a command button, the form letter would be printed using data
	from the current record in the customer table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600 kbWord 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
