---
layout: page
title: "Q221719: FIX: Polish Collate Sequence Not Available in Options Data Tab"
permalink: /kb/221/Q221719/
---

## Q221719: FIX: Polish Collate Sequence Not Available in Options Data Tab

{% raw %}

	Article: Q221719
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 03-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using Polish Windows 95 or Windows 98. You install US Visual FoxPro 6,
	and add a CODEPAGE = 1250 to the Config.fpw configuration file. When you open
	the Options dialog, select the Data tab, and open the Collating sequence
	drop-down box, you will not see Polish appear as one of the choices.
	
	Also, if you issue the following command:
	
	  SET COLLATE TO "POLISH"
	
	you will see the error:
	
	  Collating sequence 'POLISH' is not found.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install a Polish language version of Windows 95.
	
	2. Install Visual FoxPro 6.0.
	
	3. Place the following in a file called Config.fpw in the Visual FoxPro home
	  directory:
	
	  CodePage=1250
	
	4. Exit and restart Visual FoxPro.
	
	5. Select Tools and then Options from the main menu.
	
	6. Click the Data tab.
	
	7. Open the Collating sequence drop-down.
	
	8. The items Czech, Hungarian, Machine, and Slovak will be visible. Polish and
	  General are missing.
	
	9. Using other system codepage and Visual FoxPro codepage combinations, you may
	  see other missing collating sequences. These are:
	
	+--------------------------------------------------------------------+
	| Visual FoxPro Codepage | Possible Missing Sequences                | 
	+--------------------------------------------------------------------+
	| 437                    | GENERAL, UNIQWT, ICELAND, NORDAN, SWEFIN  | 
	+--------------------------------------------------------------------+
	| 850                    | GENERAL, UNIQWT, ICELAND, NORDAN, SPANISH | 
	+--------------------------------------------------------------------+
	| 852                    | GENERAL, POLISH                           | 
	+--------------------------------------------------------------------+
	| 857                    | GENERAL                                   | 
	+--------------------------------------------------------------------+
	| 861                    | GENERAL                                   | 
	+--------------------------------------------------------------------+
	| 865                    | NORDAN                                    | 
	+--------------------------------------------------------------------+
	| 1250                   | POLISH, GENERAL                           | 
	+--------------------------------------------------------------------+
	| 1254                   | GENERAL                                   | 
	+--------------------------------------------------------------------+
	| 10000                  | SWEFIN, GENERAL, NORDAN                   | 
	+--------------------------------------------------------------------+
	| 10029                  | POLISH                                    | 
	+--------------------------------------------------------------------+
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
