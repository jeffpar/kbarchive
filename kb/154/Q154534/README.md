---
layout: page
title: "Q154534: DBWEB: How to Create Custom Success/Failure Messages"
permalink: kb/154/Q154534/
---

## Q154534: DBWEB: How to Create Custom Success/Failure Messages

	Article: Q154534
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft dbWeb, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft DbWeb can insert, update, or delete records from various back-end
	databases. Typically, you want to supply the user with some information about
	whether their insert, update, or delete was successful. DbWeb supplies a default
	insert, update, and delete success/failure message. This is generally enough
	information; however, you may want to customize this message.
	
	Your custom insert, update, and delete message can be an entire HTML document
	that can take on the look and feel of the rest of your HTML documents. You can
	customize these messages in two ways.
	
	First, you can type the HTML directly in the property sheet of the "Insert
	success msg," "Insert fail msg," "Update success msg," "Update fail msg,"
	"Delete success msg," and "Delete fail msg."
	
	Second, you can supply a URL to an HTML document; however, you must use the
	<META HTTP-EQUIV="REFRESH" CONTENT="0; URL=/dbWeb/MyHTML.htm"> HTML tag.
	However, this HTML tag is not supported by all browsers. Some browsers that do
	support it are Microsoft Internet Explorer versions 3.0 and 2.0, and Netscape
	versions 3.0 and 2.0.
	
	MORE INFORMATION
	================
	
	The following steps detail the two methods described above.
	
	Method 1 - Typing HTML Tags into Property Sheet
	-----------------------------------------------
	
	1. Start dbWeb Administrator.
	
	2. Select and open the Customers sample schema.
	
	3. In the Schema tab, click to select the Insert check box.
	
	4. Click the Ins/Upd/Del tab.
	
	5. Under "Data columns in selected table," expand the Customers table by
	  double-clicking it.
	
	6. Click the Add-All button.
	
	7. Under "Insert data columns," select "Customers.Customer ID."
	
	8. Click the Properties button.
	
	9. On the properties sheet, make sure that you are looking at the Insert/Update
	  Form properties. To do this, just below the titlebar of the properties sheet,
	  there is a drop-down list. Click the arrow to view your three selections, and
	  choose the Insert/Update Form Properties.
	
	10. Type the following in the "Insert success msg" property:
	
	  "Insert SuccessYour insert was successful" (without the quotation marks)
	
	11. Type the following into the "Insert fail msg" property:
	
	  "Insert FailedYour insert failed" (without the quotation marks)
	
	  NOTE: The "Insert success msg," "Insert fail msg," "Update success msg,"
	  "Update fail msg," "Delete success msg," and "Delete fail msg" properties
	  are limited to 2047 characters. Also, you can use plain text without the
	  HTML tags. The HTML tags will allow you to customize the look in your
	  Internet browser.
	
	12. Close the properties sheet.
	
	13. Click the Apply button.
	
	Method 2 - Using a URL to Reference a Custom HTML Document
	----------------------------------------------------------
	
	NOTE: The following example references two HTML documents called MySuccess.htm
	(insert success message) and MyFail.htm (insert failure message). Just
	substitute your own custom HTML document names for MySuccess.htm and
	MyFail.htm.
	
	1. Start dbWeb Administrator.
	
	2. Select and open the Customers sample schema.
	
	3. On the Schema tab, click to select the Insert check box.
	
	4. Click the Ins/Upd/Del tab.
	
	5. Under "Data columns in selected table," expand the Customers table by
	  double-clicking it.
	
	6. Click the Add-All button.
	
	7. Under "Insert data columns," select "Customers.Customer ID."
	
	8. Click the Properties button.
	
	9. On the properties sheet make sure that you a looking at the Insert/Update
	  Form Properties. To do this, just below the titlebar of the properties sheet,
	  there is a drop-down list. Click the arrow to view your three selections, and
	  choose the Insert/Update Form Properties.
	
	10. Type the following into the "Insert success msg" property:
	
	  <META HTTP-EQUIV="REFRESH" CONTENT="0; URL=/dbWeb/MySuccess.htm">
	
	11. Type the following into the "Insert fail msg" property:
	
	  <META HTTP-EQUIV="REFRESH" CONTENT="0; URL=/dbWeb/MyFail.htm">
	
	  NOTE: The above "URL=/dbWeb/MySuccess.htm" assumes that your relative path to
	  the dbWeb documents folder is "/dbweb/" and your HTML document is located in
	  that folder.
	
	12. Close the Properties sheet.
	
	13. Click the Apply button.
	
	To test these two methods, open your favorite browser and use the "getqbe" method
	to open the Customers sample schema. Click the Submit Query button. On the next
	page, click the Submit button. Type a new CompanyID and Company Name, and then
	click Submit Insert. You should see your custom success message. To see your
	custom failure message follow the same steps, except do not type any information
	on the submit customer page, and then click Submit Insert. You should now see
	your custom failure message.
	
	REFERENCES
	==========
	
	For more information about Insert/Update/Delete properties, search for
	"insert/update/delete properties sheet," using the dbWeb 1.0/1.1 Help "Search
	for Help On...."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbdbWebSearch kbdbWeb100 kbdbWeb110
	Version           : WINDOWS:1.0,1.1
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
