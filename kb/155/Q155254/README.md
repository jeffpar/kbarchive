---
layout: page
title: "Q155254: Creating a Unique Default Home Page in a Different Directory"
permalink: /kb/155/Q155254/
---

## Q155254: Creating a Unique Default Home Page in a Different Directory

{% raw %}

	Article: Q155254
	Product(s): Internet Information Server
	Version(s): 1.0 2.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to create a unique default home page that resides in
	a directory other than the IIS WWW publication default of wwwroot.
	
	MORE INFORMATION
	================
	
	To create the unique default home page:
	
	1. Open the Internet Service Manager.
	
	2. Select the WWW service.
	
	3. On the Directories tab, select the default home page. It is the listing with
	  a Home icon on the left side.
	
	4. Click Edit Properties.
	
	5. Under Directory, modify the full path to your new default home page.
	
	6. Under Access, verify that the "Read for HTML documents" check box and the
	  "Execute for scripts" check box are selected.
	
	7. Click Help at the bottom of this dialog box for further clarification.
	
	8. Click OK to return to the WWW Service Directories dialog box.
	
	9. Verify that the Enable Default Document check box is selected.
	
	10. Replace the name Default.htm with the full filename of your new default home
	  page in the Default Document list box.
	
	11. Click Help at the bottom of the dialog box for more information.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : 1.0 2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
