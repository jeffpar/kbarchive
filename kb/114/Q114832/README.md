---
layout: page
title: "Q114832: ADT/ODE: Calendar Control Cannot Format Individual Dates"
permalink: /kb/114/Q114832/
---

## Q114832: ADT/ODE: Calendar Control Cannot Format Individual Dates

{% raw %}

	Article: Q114832
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0,7.0,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	In the Calendar control included with Microsoft Access 97, Microsoft Access for
	Windows 95 version 7.0, and the Microsoft Access Developer's Toolkit (ADT)
	versions 2.0 and 7.0, you can change the formatting of all the text, but you
	cannot change the formatting of individual dates.
	
	CAUSE
	=====
	
	This is a design limitation of the Calendar control.
	
	RESOLUTION
	==========
	
	This article assumes that you are familiar with Visual Basic for Applications
	and with creating Microsoft Access applications using the programming tools
	provided with Microsoft Access. For more information about Visual Basic for
	Applications, please refer to your version of the "Building Applications with
	Microsoft Access" manual.
	
	NOTE: Visual Basic for Applications is called Access Basic in Microsoft Access
	version 2.0. For more information about Access Basic, please refer to the
	"Building Applications" manual.
	
	A workaround for this behavior is to use a text box on your form that reflects
	the date selected in the Calendar control. The following example demonstrates
	how to create such a text box:
	
	1. From the Database window, do one of the following.
	
	   - In Microsoft Access 97:
	
	     In Design view, open the form to which you want to add the text box. On the
	     Insert menu, click ActiveX Control, and then select Calendar Control 8.0.
	     After you have selected the Calendar control, click OK.
	
	   - In Microsoft Access 7.0:
	
	     In Design view, open the form to which you want to add the text box. On the
	     Insert menu, click Custom Control, and then select the Calendar control.
	     After you have selected the Calendar control, click OK.
	
	   - In Microsoft Access 2.0:
	
	     In Design view, open the form to which you want to add the text box. On the
	     Edit menu, click Insert Object and then select the Insert Control option
	     button. In the Control Type box, select Calendar Control. If the Calendar
	     control does not appear in the box, click the Add Control button and
	     select the MSASB20.OCX file from your ADT directory. After you have
	     selected the Calendar control, click OK.
	
	2. Change the Calendar control's Name property to Calendar1.
	
	3. Add a new text box to the form. Change the text box's Name property to
	  CalendarDate.
	
	4. To display the form's module, select the Calendar control, click the
	  control's OnClick property field, click the Build button to the right of the
	  field, select Code Builder, and then click OK.
	
	5. Enter the appropriate code so that the procedure looks as follows.
	
	  NOTE: In the following sample code, an underscore (_) at the end of a line is
	  used as a line-continuation character. Remove the underscore from the end of
	  the line when re-creating this code in Access Basic.
	
	        Sub calendar1_Click ()
	           Me!calendardate.value = Format(Me!calendar1.object.value, _
	                "dddddd")
	        End Sub
	
	  This procedure sets the value of the CalendarDate text box to the value of the
	  date selected in the Calendar control, with a Long Date format. Note that you
	  can use the format of your choice--you do not have to use the Long Date
	  format.
	
	6. Close the module.
	
	7. View the form in Form view, and select different dates.
	
	STATUS
	======
	
	Changes to the Calendar control are being reviewed and will be considered for
	possible inclusion in a future release of the Microsoft Office Developer Edition
	Tools.
	
	REFERENCES
	==========
	
	For more information about the Calendar control, search the Help Index for
	"calendar control," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:2.0,7.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
