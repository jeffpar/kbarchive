---
layout: page
title: "Q198720: SMSINST: Script Item Text Must be Defined for Every Language"
permalink: kb/198/Q198720/
---

## Q198720: SMSINST: Script Item Text Must be Defined for Every Language

	Article: Q198720
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsmsInst
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple languages are defined in Systems Management Server Installer, all
	custom text labels for script items may be blank even though they were defined
	within the script. This may happen if a script item with custom text is created
	in one language, and then another language is selected. The text that was
	defined for the script item may now be blank in the newly selected language.
	
	CAUSE
	=====
	
	If you have not clicked to select the Copy Default check box on the Languages
	tab in Installation Properties, SMS Installer does not populate the default,
	custom text values to the other languages selected, and these custom text values
	have to be entered in manually for all other languages.
	
	If you have clicked to select the Copy Default check box, all of the script item
	text, from the language in which they were created, are used in the script items
	for the other languages.
	
	MORE INFORMATION
	================
	
	To manually enter custom text values in the other languages, in the script
	editor, click the desired language in the Language box, open the script item,
	and then type in the text values. Do this for all script items that contain
	custom text.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : :1.0,2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
