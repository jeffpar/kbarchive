---
layout: page
title: "Q107357: PC Forms: Incorrect Data Printed from Subform"
permalink: /kb/107/Q107357/
---

## Q107357: PC Forms: Incorrect Data Printed from Subform

{% raw %}

	Article: Q107357
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print a custom form created using version 1.0 of Microsoft Electronic
	Forms Designer, information in subforms may not print as expected. When E-Form
	Caching is turned on, information from a previous instance of the subform may
	print instead of the current data.
	
	CAUSE
	=====
	
	The instructions listed in the "Adding Modal and Modeless Subforms" section
	(pages 98-102) of the Microsoft Electronic Forms Designer "Developer's Guide"
	will place code in correct locations for reading subforms. However, it does not
	provide instructions for properly handling printing of subforms when caching is
	turned on.
	
	The method outlined in the "Developer's Guide" is for the ReadTaggedControls
	function to be called in the Load event of a subform. When a subform is opened,
	ReadTaggedControls reads the subform's data from the MEF package. If a custom
	message is read and the Print command is issued before the subform is opened,
	the Load event for the subform does not take place. Consequentially, the
	ReadTaggedControls function is not called to retrieve the subform's data from
	the package. When caching is turned on, the cached data for the subform is used
	and will print.
	
	WORKAROUND
	==========
	
	To work around this problem, you must read the subform data from the package
	when the e-form loads, rather then waiting to read the data when the subform is
	opened. To do so, perform the following steps to add code to the ReadMessage
	function defined in the EFORM.BAS file:
	
	1. Open the E-Form project in Microsoft Visual Basic.
	
	2. Open the EFORM.BAS file.
	
	3. In the Proc: list box, select ReadMessage.
	
	4. Add the ReadTaggedControls function for each subform below the comment "Add
	  code here to unpackage your data."
	
	  For example, if there is a subform named frmHardware, add the following line
	  of code:
	
	        ReadTaggedControls frmHardware, gPackage
	
	5. Remove the ReadTaggedControls function from the Load event for the subform.
	  From the Project window, select the subform and choose the View Code button.
	
	6. From the Object: list box, select Form.
	
	7. From the Proc: list box, select Load.
	
	8. Delete the following line of code:
	
	        ReadTaggedControls Me, gPackage
	
	The subform's data will now be read from the package when the form is opened and
	will be available to the print procedure regardless of when the subform is
	read.
	
	
	Additional query words: 1.00 wrong printed sub form
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
