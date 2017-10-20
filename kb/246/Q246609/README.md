---
layout: page
title: "Q246609: HOWTO: Start Internet Explorer and Navigate to a URL Using OLE"
permalink: /kb/246/Q246609/
---

## Q246609: HOWTO: Start Internet Explorer and Navigate to a URL Using OLE

{% raw %}

	Article: Q246609
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:4.01,4.01 Service Pack 2,5,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbole kbInternet kbvfp500a kbvfp600 kbVS600sp3 kbGrpDSFox kbCodeSnippet
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to start an instance of Internet Explorer, navigate to a
	particular Web page, and then close down Internet Explorer when the focus is
	switched back to Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Create a program and enter the following code:
	
	  ON ERROR WAIT WINDOW "Internet Explorer has been shut down!" TIME 1
	  IE_handle = 0
	
	  IF NOT 'FOXTOOLS' $ SET('LIBRARY')
	     SET LIBRARY TO SYS(2004)+"FoxTools"
	  ENDIF
	
	  IEWind = MAINHWND()
	  GetActive=RegFn('GetActiveWindow','','I') && Determine if FoxPro is on top.
	
	  oie = CREATEOBJECT("internetexplorer.application")
	  oie.Visible = .T.
	  oie.Navigate("http://msdn.microsoft.com/vfoxpro/")
	
	  DO WHILE .T.    && Keep looping until the ActiveWindow = FoxWind
	     DOEVENTS()
	     IF IEWind = CallFn(GetActive)
	        EXIT
	     ENDIF
	  ENDDO
	
	  SET LIBRARY TO
	  oie.Application.Quit
	  ON ERROR
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbole kbInternet kbvfp500a kbvfp600 kbVS600sp3 kbGrpDSFox kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:4.01,4.01 Service Pack 2,5,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
