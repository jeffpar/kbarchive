---
layout: page
title: "Q212793: SMSINST: Increment Variable Operation Does Not Work as Expected"
permalink: /kb/212/Q212793/
---

## Q212793: SMSINST: Increment Variable Operation Does Not Work as Expected

	Article: Q212793
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsmsInst
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Set Variable Action with the Increment Operation in a Systems
	Management Server Installer script, the numeric variable will not increment as
	expected. It will remain at "1" and might never exit a loop if that value is
	being evaluated as the loop's conditional.
	
	CAUSE
	=====
	
	When writing a script for a loop in which a variable is needed to increment
	through each iteration of the loop, only the increment operation and the
	variable should be selected. This will not work properly unless a new value is
	given to increment. This can be thought of as a typical X = X + 1 type of
	operation where the first X is the variable and the second X is the new value.
	
	WORKAROUND
	==========
	
	To work around this problem, simply set the new value to your variable name
	surrounded with "%" symbols. The following is an example of such a script:
	
	  Set Variable COUNTER to
	
	  While COUNTER Less Than "10" do
	    Display Message "Counter"
	  Set Variable COUNTER to %COUNTER%
	  End Block
	
	Note that %COUNTER% should be defined as the message text in the display message
	script item. Also, the operation value within "Set Variable COUNTER to
	%COUNTER%" should be defined as increment.
	In this example COUNTER is the variable and %COUNTER% is the new variable inside
	the Set Variable dialog box.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsmsInst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
