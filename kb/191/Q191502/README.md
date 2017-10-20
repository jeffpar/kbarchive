---
layout: page
title: "Q191502: HOWTO: Use Component Gallery to Build an Application"
permalink: /kb/191/Q191502/
---

## Q191502: HOWTO: Use Component Gallery to Build an Application

{% raw %}

	Article: Q191502
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbXBase kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the process of using new Visual FoxPro 6.0 tools to
	create applications with minimal coding required. The new Application Wizard
	automatically creates a full featured, robust application framework that handles
	common application functionality and features. This Application Builder ties
	directly into the framework to automate alteration of framework settings.
	
	MORE INFORMATION
	================
	
	Building an application in Visual FoxPro 6.0 is greatly simplified from prior
	versions of the product. The process for creating an application follows.
	
	Creating a New Project with the Application Wizard
	--------------------------------------------------
	
	The wizard generates a new project containing the application framework. The
	framework is a set of files that constitute the "glue" that ties the various
	components of your application together. To create a new application, do one of
	the following:
	
	a. From the Tools menu, point to Wizards, then click Application.
	
	b. From the File menu, choose New. In the New dialog box, select Project and
	  then click the Wizard button.
	
	c. From the Tools menu, choose Component Gallery and double-click the New
	  Application item in the Catalogs folder.
	
	The application framework handles many common framework functions including the
	following:
	
	- Menu and Toolbar management
	- Data handling
	- Document management (forms and reports)
	- Environment state
	- Error handling
	
	In addition, the framework also supports the following built-in features:
	
	- Login password dialog
	- Quickstart screen
	- Splash screen
	- About dialog
	- Favorites menu
	- Options dialog
	- Application style (normal, top-level, module)
	
	Set the Application Framework Options Using the Application Builder
	-------------------------------------------------------------------
	
	All of the preceding features mentioned can be set using the Builder. The Builder
	is reentrant and allows you to go back into it later (right- click the Project
	Manager and select Builder). The Builder also has Credit information to display
	on the Splash screen and the About dialog box.
	
	Create Data using the Database Wizard
	-------------------------------------
	
	The Application Builder has a Database Wizard button located on the Data tab. You
	can use this or you can call the Wizard directly from the Tools menu. The
	Database Wizard contains over 20 common database templates that are ready to
	use. If you like, you can even populate tables with sample data. If you use the
	Application Builder to call this Wizard, the data is stored, by default, in the
	Data subfolder created by the Application Wizard.
	
	Generate New Forms and Reports
	------------------------------
	
	Once you have created database(s) and tables for your application, you may want
	to generate forms and reports for these data sources. The Application Builder
	allows you to do this from the Data tab. The Data tab automatically generates
	forms and reports for the tables selected and allows you to select the same
	visual styles that are available for forms and reports.
	
	NOTE: If you prefer, you can also do this from the Component Gallery. The main
	catalog has a Templates folder that lets you create wizard Forms and reports
	programmatically.
	
	Using the Component Gallery to Enhance and Customize the Application
	--------------------------------------------------------------------
	
	The following ideas are just a few of the things you can do with the Gallery to
	enhance your application.
	
	- Create a new form: The Component Gallery contains a number of form templates
	  in the Visual FoxPro catalog that let you select certain fields from a data
	  source. The template dialog box includes an option to have the generated form
	  automatically added to your project. If you desire a more complex form such
	  as a 1-to-Many form, choose the appropriate Form Wizard.
	
	- Add a hyperlink to a form: The Visual FoxPro catalog contains a number of
	  hyperlink classes in the Internet folder. You can select a hyperlink label,
	  image or button. When you drag-and-drop the control onto a form, a builder
	  opens prompting you for the caption and target URL. In addition, the
	  Component Gallery includes a World Wide Web (WWW) catalog containing a
	  variety of common Web sites. If you find a Web site that you like and for
	  which you would like to create a hyperlink, drag-and- drop that item to your
	  form (or choose Add to Form from the shortcut menu).
	
	- Add Wallpaper to your form: The Multimedia catalog contains a number of
	  images as well as access to the entire Visual Studio media gallery. With your
	  form already open, create form wallpaper by right-clicking the desired image
	  then selecting Select Form Wallpaper from the shortcut menu. Alternatively,
	  you can drag the image from the gallery and drop it on the form to create an
	  Image control on your form.
	
	- Add an ActiveX control to your form: The ActiveX catalog contains a list of
	  all registered ActiveX controls. If the Installed Controls folder in your
	  catalog is empty, click the Installed Controls item, then from the shortcut
	  menu select Refresh Controls. The Property dialog box for this item provides
	  the option to refresh from all controls in your system, or only those
	  registered in the Visual FoxPro Options dialog box.
	
	- Place a data-bound grid on your form: The Component Gallery allows you to
	  create Data items in any catalog. A form displays a grid when you
	  drag-and-drop one of these tables or views onto the form. You can also try
	  examples from the Testdata database in the Visual FoxPro catalog.
	
	- Add a video image to your report: The Visual Studio media gallery in the
	  Multimedia catalog contains a number of videos you might want to use in your
	  application. You can simply drag-and-drop one of these files onto a form or
	  you might add the Video Player class and select a video of your choosing.
	
	- Add a shortcut menu to your form: The Visual FoxPro catalog contains several
	  shortcut menu classes in the Menus folder. You can use the Navigation
	  Shortcut Menu class on any form to add record navigation functionality. You
	  can use the Shortcut Menu class to create any kind of shortcut menu.
	
	- Incorporate a thermometer to show progress of an activity: The Thermometer
	  form class in the Dialogs folder is similar to the common thermometer used
	  internally by Visual FoxPro. You can use this class to show progress of an
	  operation that takes some time to perform.
	
	- Create a new report: The Component Gallery contains a number of report
	  templates in the Visual FoxPro catalog that let you select certain fields
	  from a data source. The template dialog includes an option to automatically
	  add the generated report to your project. The Report Wizards offer most
	  options including summary and grouping features as well as support for
	  percent-of-total type reports.
	
	- Add highlighting effects to your forms: The MouseOverFx class can provide the
	  raised-control look of Microsoft Office 97 toolbars to any form or toolbar.
	
	- Send e-mail from a form button: The MAPI ActiveX controls let you automate
	  e-mail to your clients. You can also use the Send Mail class in the Buttons
	  catalog to send the current record to an e-mail address.
	
	- Lookup information in the Registry: Use the Registry classes in the Utilities
	  catalog for accessing critical Registry information. For example, you might
	  need to find an ODBC driver or shared tool.
	
	- Output data to Word Mail Merge: The Automation catalog contains a Mail Merge
	  class that is used by the Mail Merge Wizard to output data to Word as a Mail
	  Merge document.
	
	- Create a Web browser for your application: The Web Browser control in the
	  Internet catalog can be the basis for your Visual FoxPro Web Browser form.
	  The control allows you to integrate Visual FoxPro code with browser
	  interaction. For example, you can intercept or log (and optionally redirect)
	  URL sites before navigation. The Webvwr.scx file in the Vfp98\Ffc folder
	  illustrates how to create this type of form.
	
	- Add a data mover to your form: The User Controls catalog contains an
	  assortment of mover classes. A mover is a set of list boxes that enable you
	  to move an item from one list box to another list box. With the data mover
	  classes, you need to drop the class onto a form. These movers are similar to
	  those used in the Visual FoxPro Wizards.
	
	- Output data to Excel Pivot Table: The Automation catalog contains a Pivot
	  Table class that is used in the PivotTable Wizard to output data to Excel as
	  a Pivot Table document.
	
	- Create data-bound charts: Start with the Graph By Record class in the
	  Automation catalog to bind your chart to data, record-by-record. This and the
	  Graph class share the engine used by the Graph Wizard.
	
	- Add Web Publishing to your application: The new Web Publishing Wizard and
	  Genhtml engine provide HTML generation tools for data. The wizard, a friendly
	  layer on Genhtml, lets you select a variety of data layout and visual style
	  options. You can create dynamic output so that the HTML updates as data
	  changes.
	
	You can now build and Run your application. You should build your application
	frequently to test and debug the application.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help: search on: "Developing Applications Using the
	Application Framework"
	
	Additional query words: PGFest600
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbXBase kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
