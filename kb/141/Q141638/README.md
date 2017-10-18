---
layout: page
title: "Q141638: PRB: Unable to Change Sorted Property in Form Designer"
permalink: kb/141/Q141638/
---

## Q141638: PRB: Unable to Change Sorted Property in Form Designer

	Article: Q141638
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Sorted property of a list box or combo box contained in a form in the Form
	Designer cannot be changed from '.F. - False' to '.T.- True' if the
	RowSourceType property is set to anything other than '0 - None' or '1 - Value'.
	
	CAUSE
	=====
	
	The Sorted Property of a combo box or list box can be set to '.T. - True' only
	if the RowSourceType property is set to either '0 - None' or '1 - Value'.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If it is intended for a list box or combo box to have a RowSourceType of
	anything other than 0 (None) or 1 (Value), then the Sorted Property cannot be
	set to anything other than '.F. - False' because it cannot have any effect on
	any of the other RowSourceTypes.
	
	It is possible to set the Sorted Property to '.T. - True' while the RowSourceType
	is either 0 (None) or 1 (Value) and then to set the RowSourceType to something
	different. If this is done and a form is closed and saved, the Sorted Property
	will return to '.F. - False'.
	
	For more information on the Sorted Property, please refer to the "Sorted
	Property" topic in the Help file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: This example uses a list box, but the same could also be applied to a combo
	boxl.
	
	1. Create a new form and place a list box on it.
	
	2. Set the RowSourceType Property of the list box to '0 - None' (the default
	  setting).
	
	3. Change the Sorted property for the list box from '.F. - False' to '.T. -
	  True'.
	
	4. Change the RowSourceType property for the list box from '0 - None' to '5 -
	  Array'.
	
	5. Change the Sorted property for the list box from '.T. - True' to '.F. -
	  False'. Note that attempting to change it back to '.T. - True' will not be
	  allowed.
	
	If, after implementing steps 1 through 4, you save and close the form, the list
	box RowSourceType property would be '5 - Array' and the Sorted property would
	have been '.T. - True'. But, once the form is opened within the Form Designer,
	the Sorted property will be reset to '.F. - False'.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
