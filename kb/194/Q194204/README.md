---
layout: page
title: "Q194204: HOWTO: Extend the Web Publishing Wizard with Custom Layouts"
permalink: /kb/194/Q194204/
---

## Q194204: HOWTO: Extend the Web Publishing Wizard with Custom Layouts

{% raw %}

	Article: Q194204
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 6.0 ships with a new wizard called the Web Publishing Wizard. This
	is one of the most powerful wizards that has ever shipped with Visual FoxPro. It
	is built entirely on top of the GENHTML engine, so it has a completely open
	architecture to allow for user created custom layouts and styles.
	
	MORE INFORMATION
	================
	
	Most of the inner workings of the Web Publishing Wizard reside on Step 3 that
	includes both data layouts and visual styles. All of the information you see in
	the two lists are metadata stored in the Genhtml.dbf file stored in your Visual
	FoxPro root directory.
	
	NOTE: This file is automatically recreated if you delete it (it is stored
	internally in the _HTML.VCX class library).
	
	The Genhtml.dbf table has a field called "Type" that determines the contents of
	each list. You can create a layout or style by simply inserting a new record
	into the GENHTML table and setting its Type field to either Layout or Style
	(HINT: Make sure you change the Save field to .T. so that new versions of the
	Web Publishing Wizard retain your custom records). The Wizard specifically uses
	the Text and Desc fields to describe what the layout/style does.
	
	Data Layouts
	------------
	
	Records marked with a field Type = "Layout" are included in the Data Layouts
	list. A data layout is simply a functional representation of the way data is
	laid out on your Web page. For example, you may want a layout with data listed
	in columns using static HTML table tags. Layouts encompass both the data
	orientation (tabular vs. columnar) as well as the process driving the data
	display. You can have layouts with static HTML tags, or dynamic ones using
	technologies such as ASPs, ActiveX Data Objects (ADO), Remote Data Service
	(RDS), Tabular Data Controls, and so forth. The Web Publishing Wizard includes
	several layouts that use the Tabular Data Control.
	
	Since layouts function to generate data that is displayed on a Web page, you need
	some mechanism to plug in your custom Visual FoxPro code. The Classname and
	Classlib fields serve this exact purpose. A public variable called _oHTML is
	created from your class by the Genhtml.prg engine and used to drive an entire
	data generation process by calling a method named "Generate". So, if you write
	your own class, make sure to have a Generate method. The best solution, however,
	is to subclass an existing layout called _HTMLTABLE in the _HTML.vcx file.
	
	NOTE: _TabDataControl in the _HTMLSTY.VCX file is an example of this.
	
	By doing this, you can call a common method such as GenerateTable.
	
	The Genhtml.dbf file also contains provisions allowing you to hook into the class
	code and control various options before and/or after execution of code. You can
	use the PreScript memo field to execute code before calling the data generate
	method. Here is an example that sets a specific property of the class and the
	background color of the Web page. Remember that the _oHTML global is already
	created so you can make many property settings before actually having the table
	generated. For example:
	
	     _oHTML.nTableStyle=1
	     _oHTML.Body.bgColor="silver"
	
	There is also a PostScript memo field for executing code after you generate the
	table. The combination of these two fields and the class definition you use for
	the layout provide the developer with lots of flexibility.
	
	The primary purpose of a layout is to generate and return HTML that you use in
	the Web page. This can be a bit messy when you append many strings together to
	create the HTML/script. In addition, you may find the need for script reuse. The
	Genhtml.dbf file has special fields (Script and HTML) to simplify these issues.
	The HTML field contains HTML that gets embedded in your Web page's HTML output.
	For example, the _TabDataControl class has code that embeds HTML from the
	FilterScript record into the Genhtml.dbf file. For example:
	
	     THIS.Body.AddGenHTMLField("HTML",,"FilterScript")
	
	Many of the Visual Styles make use of the Script field. In fact, many of these
	records call another Script record with Id = "SetBodyImage".
	
	Layout Options
	--------------
	
	If you are somewhat familiar with the Web Publishing Wizard, you may have noticed
	that the Options dialog box is also meta-driven. The Properties field controls
	this setting. For example, the TabCtlList record has the following:
	
	     Options=TabListOptions
	
	This indicates that you should lookup a record in the Genhtml.dbf file with
	fields Type = "OPTIONS" and Id = "TabListOptions". The classname and classlib
	fields reference class information that you need to display and handle options
	particular to the layout. You need to design this to handle properties specific
	to your layout. You use the Options dialog box to set properties for your layout
	class. As with the PreScript and PostScript fields, you can have the Wizard set
	properties before and after data generation.
	
	It is highly recommended that you subclass your custom layout dialogs from either
	_Options or _StaticOptions classes in the _HTMLSTY.vcx file. The _Options class
	contains details of how to register properties (See the RegisterSetting method).
	To get an idea of how to accomplish this, look at the classes stored in the
	_HTMLSTY.vcx file that correspond to each layout.
	
	Visual Styles
	-------------
	
	Records with field Type = "Style" are in the Visual Styles list. A style is a
	visual enhancement to the selected layout. You can have multiple styles on a Web
	page, however, you can only have a single layout. A common visual style commonly
	sets the background color/image as well as special tags such as a title
	description. Many of these are included with the Wizard.
	
	Most of the visual styles included merely set the background image of the Web
	page. Some add a specific HTML tag, while others work in setting cascading style
	sheet settings (See the Style field). In general, the script in the Genhtml.dbf
	file controls the visual style information.
	
	Inner Wizard Workings
	---------------------
	
	So, how does the Wizard work to coordinate the user selected layout and Styles?
	Again, everything goes through the Genhtml.prg engine. Let's look at the
	parameter statement as follows:
	
	   LPARAMETERS tcOutFile,tvSource,tnShow,tvIELink,tcStyle,tcScope,tcHTMLClass
	
	Notice the fifth parameter. This corresponds to the Id field in the Genhtml.dbf
	file. You can pass it any record Id in this table (The Genhtml.prg does not care
	about the Type field). The Wizard has an output option allowing export to a
	script. Here is an example of some code in the script:
	
	     DO (_GENHTML) WITH "C:\VFP6\OFFICES.HTM",ALIAS(),2,,"_RX71AACKD"
	
	The Wizard actually creates a new record in GENTHML (Id = "_RX71AACKD") that is
	called by the script. The Links field in this record points to the layout and
	style records used. This field actually inherits the behavior of these other
	records. There is virtually unlimited potential with the entire Web Publishing
	Wizard/Genhtml architecture.
	
	
	Additional query words: kbInternet kbWizard kbVFp600 PGFest600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
