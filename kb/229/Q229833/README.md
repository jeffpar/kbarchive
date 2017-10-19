---
layout: page
title: "Q229833: DOC: Syntax Changes with Ad Rotator Component"
permalink: /kb/229/Q229833/
---

## Q229833: DOC: Syntax Changes with Ad Rotator Component

	Article: Q229833
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbASP kbGrpDSASP kbDSupport kbIIS
	Last Modified: 06-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes syntax differences between the Ad Rotator component
	(MSWC.AdRotator) installed with Internet Information Server (IIS) 3.0 and the Ad
	Rotator component installed with Internet Information Server 4.0.
	
	The Ad Rotator component displays advertisements and "rotates" different
	advertisements every time an Active Server Page is displayed.
	
	MORE INFORMATION
	================
	
	The Ad Rotator component installed with IIS 4.0 changes the way properties are
	specified, as well as what values are valid for the TargetFrame property.
	
	The syntax changes from IIS 3.0 to IIS 4.0 are as follows:
	
	- Changing property setting syntax from Property(value) syntax to Property =
	  value syntax
	
	- Changing TargetFrame values from the frame name (_top) to a name/value pair
	  (target=_top)
	
	The following is valid VBScript syntax for the IIS 3.0 version of the Ad Rotator
	component:
	
	  <%  
	  Set ad = Server.CreateObject("MSWC.AdRotator") 
	  ad.Clickable(False)
	  ad.Border(0)
	  ad.TargetFrame("_top")
	
	  Response.Write ad.GetAdvertisement("/ads/adrot.txt")
	  %> 
	
	The following is valid VBScript syntax for the IIS 4.0 version of the Ad Rotator
	component:
	
	  <%  
	  Set ad = Server.CreateObject("MSWC.AdRotator") 
	  ad.Clickable = False
	  ad.Border = 0
	  ad.TargetFrame = "target=_top"
	
	  Response.Write ad.GetAdvertisement("/ads/adrot.txt")
	  %> 
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbGrpDSASP kbDSupport kbIIS 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
