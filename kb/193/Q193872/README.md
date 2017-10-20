---
layout: page
title: "Q193872: BUG: VB6 Version of RDO Cannot Access Oracle Packages"
permalink: /kb/193/Q193872/
---

## Q193872: BUG: VB6 Version of RDO Cannot Access Oracle Packages

{% raw %}

	Article: Q193872
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Visual Basic 6.0 version of RDO 2.0 with the Microsoft Oracle
	ODBC Driver (that shipped with Visual Basic 6.0), you cannot access a procedure
	within a Oracle package if the procedure has Input or Output parameters that are
	passed.
	
	CAUSE
	=====
	
	This bug was caused by a fix that was implemented for a different bug in the
	version of RDO that shipped with Visual Basic 5.0. Please see the REFERENCES
	section of this article for information on that bug.
	
	The previous bug prevented access to Oracle stored procedures through RDO when
	using the <schema>.<procedure> syntax. Currently you can access a
	stored procedure through RDO using <schema>.<procedure> but you are
	now unable to access parameterized stored procedures using the
	<package>.<procedure> syntax.
	
	The exceptions to the above statement are if you are calling an Oracle stored
	procedure with no parameters, or if you are using the "resultsets from stored
	procedure" functionality with NO input parameters. Please see the REFERENCES
	section of this article for information. Under these circumstances everything
	works as expected, with no errors.
	
	RESOLUTION
	==========
	
	There is no workaround for this bug in the version of RDO v2.0 that ships with
	Visual Basic 6.0. If you need to access Oracle packages in a Visual Basic 6.0
	application, it is recommended that you switch to ADO. With ADO 1.5 and 2.0 you
	have complete access to Oracle stored procedures using
	<schema>.<procedure>, <package>.<procedure>, and even
	<schema>.<package>.<procedure>.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q175018 : HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver
	
	  Q176936 : INFO: Visual Basic 5.0 Accessing an Oracle Database Using ADO
	
	  Q180198 : BUG: RDO Doesn't Work with Schema and Oracle Stored Procedures
	
	  Q174981 : HOWTO: Retrieve Typical Resultsets From Oracle Stored Procedures
	
	Additional query words: kbDSupport kbdse kbVBp kbVBp600 kbVBp500 kbVBp600 kbRDO200bug kbRDO150
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
