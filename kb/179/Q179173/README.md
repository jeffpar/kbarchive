---
layout: page
title: "Q179173: Listarr.exe: Using Arrays For List Box Row Sources"
permalink: /kb/179/Q179173/
---

## Q179173: Listarr.exe: Using Arrays For List Box Row Sources

{% raw %}

	Article: Q179173
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbDesigner kbHWMAC kbOOP kbvfp300 kbvfp500 kbvfp600 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The two files listed in the MORE INFORMATION section illustrate various features
	of list boxes when using an array as the RowSourceType for a list box.
	
	This article addresses undocumented features and behaviors of list boxes when
	using an array as the RowSourceType. There may be other ways to accomplish the
	results described in this article by using other RowSourceTypes, but the article
	focuses on arrays.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Listarr.exe
	  (http://download.microsoft.com/download/fox30pro/samp20/1/WIN98/EN-US/Listarr.exe)
	
	  Listarr.hqx
	  (http://download.microsoft.com/download/fox30powermac/samp1/1/MacOS/EN-US/Listarr.hqx)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Microsoft has no plans to intentionally change the behaviors described in this
	article. However, if some of these features do not work for your application, a
	different approach is probably needed.
	
	The sample files presented here are complex. Microsoft Product Support Engineers
	will not know all the issues presented in this article without spending some
	time working with the sample files. Please remember this if asking questions
	about the attached files.
	
	The sample files used in this article were created with the Visual FoxPro Form
	Designer. This is assumed to be the working environment in all the information
	presented below.
	
	The lists on the sample forms have the following properties set:
	
	     RowSource = Thisform.listarray
	     RowSourceType = 5-Array
	
	Thisform.listarray is a custom property of the form. To create the custom
	property, follow these steps:
	
	1. On the Form menu, click New Property.
	
	2. Type "listarray[1,1]" (without the quotes) in the Name box of the New
	  Property dialog box.
	
	One advantage to using arrays as the RowSourceType of a list box is speed. A
	SELECT - SQL statement can be executed once when the form loads to populate the
	array and then the FirstElement and NumberOfElements properties of the list box
	can be used to control what elements of the array are displayed in the list box.
	The query does not need to be rerun. Even though Visual FoxPro executes queries
	quickly, if the query is complex or is being run on a slow computer, it can be
	much slower than manipulating an array.
	
	The FirstElement and NumberOfElements Properties
	------------------------------------------------
	
	Run the sample form, Listarr1.scx while reading this section. The form uses the
	TestData!Customer sample table. It will be useful to open the sample table and
	become familiar with the data in the table.
	
	The FirstElement and NumberOfElements properties are specifically designed for
	use when the RowSourceType is 5-Array. With a one column (one dimensional)
	array, the items in the array are exactly what they say they are, the first
	element and number of elements.
	
	The Listarr1.scx form uses a one column array when it is first loaded. The one
	column is based on the Company field in the Customer table. Fill in values for
	the First Element and Number of Elements text boxes and click the Refresh List
	box button to see the effect of changing these properties.
	
	When the array is more than one column, the FirstElement property determines what
	column of the array is shown in the list box in addition to the first item from
	that column. In the sample form, click the "Use Three Column Array" option
	button. This requeries the array to be three columns; Customer.Cust_id,
	Customer.Company and Customer.Contact. The following table lists what array
	column is displayed for various settings of the FirstElement property:
	
	  FirstElement            Table Column Displayed
	  ----------------------------------------------
	  1                       Customer.Cust_id
	  2                       Customer.Company
	  3                       Customer.Contact
	  4                       Customer.Cust_id (starting with 2nd cust_id)
	  7                       Customer.Cust_id (starting with 3rd cust_id)
	  10                      Customer.Cust_id (starting with 4th cust_id)
	  5                       Customer.Company (starting with 2nd company)
	  8                       Customer.Company (starting with 3rd company)
	  11                      Customer.Company (starting with 4th company)
	  6                       Customer.Contact (starting with 2nd contact)
	  9                       Customer.Contact (starting with 3rd contact)
	  12                      Customer.Contact (starting with 4th contact)
	
	NOTE: When you use a two dimensional array, the FirstElement property is going to
	use element numbers to determine what column and with which item in that column
	to start the list.
	
	To change the first item shown for an array column to start with another item,
	add or subtract the number of array columns from the current FirstElement
	setting. As shown in the table above, to start the list on the second cust_id,
	add 3 to the FirstElement value of 1 to set the FirstElement property of the
	list to 4.
	
	Lists and drop-down list boxes can display more than one column. If more than one
	column is displayed in a list box, the FirstElement and NumberOfElement
	properties no longer function as described above. Run the attached sample form
	named Listprob.scx to see an illustration of this behavior.
	
	The Listprob.scx form manually loads two, 2-column arrays in the Load method of
	the form. One array is for the list box, the other array is for the drop-down
	list. The first array column contains colors, and the second a list of fruits.
	With the First Element text box set to 1, click the Two Columns option button to
	see the complete contents of the array in the list box.
	
	NOTE: When the One Column option button is selected, both the list box and the
	drop-down list box work the same as the Listarr1.scx form. When the Two Columns
	option button is selected, the FirstElement property no longer has any effect on
	the array items displayed in the list box.
	
	In Visual FoxPro version 3.0x (both the Windows and Macintosh versions), if the
	Two Columns option button is selected and then changed back to the One Column
	option button, the FirstElement property no longer has any effect. This does not
	happen in Visual FoxPro version 5.0x.
	
	Referencing Items in Non-Displayed Array Columns
	------------------------------------------------
	
	The BoundColumn property can be used to store data to the Value property of a
	control from any column of a list that contains more than one column whose
	RowSourceType is not 5-Array. The items displayed in the list are stored in the
	DisplayValue property of the list.
	
	However, when the RowSourceType of a list is set to 5-Array, and the BoundColumn
	property is set to any column other than the first column, the FirstElement and
	NumberOfElements properties no longer function. To obtain the corresponding data
	for a list item from another column of a two dimensional array, use one of the
	techniques described below. Look in the Click method of the list on the
	Listarr1.scx form to see these techniques in use.
	
	Using Array Subscripts
	----------------------
	
	Here is an example:
	
	     Thisform.listarray(INT(This.FirstElement/ ;
	     ALEN(Thisform.listarray,2))+This.ListIndex,2)
	
	The number 2 represents the array column choice. In the sample form, the array
	has 3 columns. If the contents of the third array column were needed, the 2
	would be changed to a 3.
	
	The ALEN(Thisform.listarray,2) returns the number of columns in the array so this
	could be coded to 3 in the sample form. Also important to note here is that the
	FirstElement property should be set so that the first column of the array is
	displayed in the list.
	
	Using Array Elements
	--------------------
	
	Here is an example:
	
	     Thisform.listarray(ASCAN(Thisform.listarray,This.ListItem ;
	     (This.ListIndex))+1)
	
	In the line of code above, the ListItem() method returns the DisplayValue of the
	list given a ListIndex number. The array is then ASCANed for this item. ASCAN()
	returns a number representing the element number of the item. Since the array
	column displayed is the first column, the next element of the array would
	represent the value in the second column of the array. Therefore a 1 is added to
	the array element number that ASCAN() returns. Add a 2 if information in the
	third column is desired. Again, remember that the first column of the array
	should be displayed in the list. Although, if it was not displayed, a 1 or a 2
	could be subtracted from the number that ASCAN() returns to identify previous
	array columns.
	
	REFERENCES
	==========
	
	For more information on array element numbers, see the AELEMENT() function in
	the Visual FoxPro Online Help.
	
	Additional query words: Listarr
	
	======================================================================
	Keywords          : kbfile kbDesigner kbHWMAC kbOOP kbvfp300 kbvfp500 kbvfp600 kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
