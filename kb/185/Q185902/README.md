---
layout: page
title: "Q185902: SMSINST: %SystemRoot% Values Not Written to Registry Correctly"
permalink: /kb/185/Q185902/
---

## Q185902: SMSINST: %SystemRoot% Values Not Written to Registry Correctly

{% raw %}

	Article: Q185902
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT environment variables (such as %SystemRoot%) are added to the
	registry during a repackage, they are captured by a repackage process, but the
	resulting script does not write the correct value(s) to the registry on the
	client during the Systems Management Server Installer installation routine.
	
	CAUSE
	=====
	
	Systems Management Server Installer uses the syntax %VARIABLENAME% to denote
	internal script variable values. For example, if the Installer variable USER is
	set to a value of 'John Smith', using the %USER% syntax would cause 'John Smith'
	to be substituted wherever %USER% appeared.
	
	Windows NT utilizes the same syntax to denote the value of environment variables.
	When the Systems Management Server Installer run-time encounters the value
	%SystemRoot% in an Edit Registry script item, it interprets this as the
	Installer variable value for %SystemRoot%, rather than the Windows NT
	environment variable value. Usually the Installer does not have a specific value
	defined for this, so nothing is actually written to the registry.
	
	WORKAROUND
	==========
	
	Using %SystemRoot% as an example, you would change the string %SystemRoot% to
	%%SystemRoot%% wherever it exists in the Installer script. This causes the
	literal value %SystemRoot% to be written to the system, which allows the
	environment variable to be resolved correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
