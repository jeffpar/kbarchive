---
layout: page
title: "Q145721: FIX: Access Violation Error on 16 MB Windows NT System"
permalink: /kb/145/Q145721/
---

## Q145721: FIX: Access Violation Error on 16 MB Windows NT System

{% raw %}

	Article: Q145721
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Access violation" error may occur when you use table buffering,
	transactions, and large amounts of data on a computer system that has 16
	megabytes of memory and that is running Windows NT version 3.51. The error does
	not occur on sytems running Windows NT with 24 or 32 megabytes of RAM.
	
	WORKAROUND
	==========
	
	Use TABLEUPDATE() with smaller data sets. The Sample Code listed in this article
	fails when updating 4000 records at one time. However, reducing the number to
	2000 cures the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  *-- Begin Code Example
	  SET ESCAPE OFF
	  SET TALK OFF
	  SET FULL ON
	  SET DELETED ON
	  SET EXCLUSIVE OFF
	  SET EXACT ON
	  SET MULTILOCKS ON
	
	  CLOSE DATA ALL
	
	  IF !FILE( 'mydbc.dbc' )
	      CREATE DATABASE mydbc
	      OPEN DATA mydbc EXCLUSIVE
	      CREATE TABLE mytable (keyfld n(10) PRIMARY KEY)
	      CLOSE DATA ALL
	  ENDIF
	
	  USE mytable
	  CALC MAX(keyfld) TO m.keyfld
	
	  IF CURSORSETPROP('buffering', 5 )
	      ? 'table buffering enabled'
	
	      FOR i = 1 TO 4000
	          m.keyfld = m.keyfld + 1
	              IF i % 100 = 0
	                  ? i, ' records added'
	              ENDIF
	              INSERT INTO mytable (keyfld) VALUES (m.keyfld)
	      ENDFOR
	
	      ? 'beginning transaction'
	      BEGIN TRANSACTION
	      ? 'transaction begun'
	
	      IF TABLEUPDATE( .t. )
	              ? 'table update succeeded'
	      ELSE
	              ? 'table update failed'
	              =TABLEREVERT(.t.)
	      ENDIF
	
	      ? 'ending transaction'
	      END TRANSACTION
	      ? 'transaction ended'
	
	  ENDIF
	  WAIT WINDOW
	  CLOSE DATA ALL
	  *-- End Code Example
	
	NOTE: This has not been tested on computers that are running Windows for
	Workgroups or Windows 95 with 16 megabytes of RAM.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b Crash tableupdate
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
