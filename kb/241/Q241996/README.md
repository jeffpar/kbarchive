---
layout: page
title: "Q241996: Update Item in MMC May Cause Excessive Screen Flicker"
permalink: kb/241/Q241996/
---

## Q241996: Update Item in MMC May Cause Excessive Screen Flicker

	Article: Q241996
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Updating a Result view item at a high refresh interval (about every five
	seconds) may cause excessive screen flicker in Microsoft Management Console
	(MMC) 1.1. This may cause slow performance.
	
	CAUSE
	=====
	
	The call to update the Result view item in MMC 1.1 redraws all the subsequent
	items below it in the Result view. This causes excessive screen flicker.
	
	RESOLUTION
	==========
	
	This behavior is resolved in the latest version of MMC. To obtain the latest
	version of MMC, please contact Microsoft Product Support Services. For a
	complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	WORKAROUND
	==========
	
	To word around this problem in MMC 1.1:
	
	1. Perform version detection as listed below. If MMC 1.2 or later is detected,
	  use the Update Result View item in the snap-in. If MMC 1.1 or earlier is
	  detected, continue with these steps.
	
	2. Call Update Item on the first item to be updated, providing the new
	  information.
	
	3. This results in a chain of calls to the GetDisplayInfo snap-in for each of
	  the subsequent items. Provide the updated information at this point.
	
	4. Do not call Update Item for each of the subsequent saved items.
	
	This workaround adds some additional work for the snap-in. It must respond to the
	GetDisplayInfo call with information that is more up-to-date than the current
	items in the Results pane. Note that the fix in MMC 1.2 prevents this from
	working because they are not called for display information from items that are
	not updated, so the version checking becomes critical. The procedure for
	performing version detection is listed below.
	
	Detecting MMC Versions for Primary Snap-ins
	-------------------------------------------
	
	Primary snap-ins must use the IConsole interface pointer that is passed to their
	IComponent::Initialize implementation for detecting MMC version numbers. This is
	because the console's IConsole interface pointer is the only MMC interface that
	can be used for querying for the new MMC 1.2 interfaces. The following sample
	implementation of a global function detects the MMC version number:
	
	  MMC_VERSION GetMMCVersion(IConsole *pConsole)
	  {
	    HRESULT hr1;
	    HRESULT hr2;
	    MMC_VERSION mmcVersion;
	
	    hr1 = pConsole->QueryInterface(IID_IConsole2, (void **)&m_ipConsole2);
	    hr2 = pConsole->QueryInterface(IID_IColumnData, (void **)&m_ipColumnData);
	      
	    if (S_OK == hr1 && S_OK == hr2)
	        mmcVersion = MMC12;
	    else
	    {    
	      if (S_OK == hr1 && S_OK != hr2)
	          mmcVersion = MMC11;
	      else
	          mmcVersion = MMC10;
	    }
	
	    return mmcVersion;
	  }
	
	The mmcVersion variable is an enumeration of type MMC_VERSION:
	
	  enum MMC_VERSION {MMC10 = 0, MMC11 = 1, MMC12 = 2};
	
	The IConsole interface pointer passed to GetMMCVersion is the same one passed to
	the snap-in's IComponent::Initialize implementation. Note that neither the
	GetMMCVersion function nor the MMC_VERSION enumeration in this example works to
	identify an MMC version later than version 1.2. However, you can still use the
	function to identify whether the version number is 1.2 or later. That is, if the
	function determines that the version number is neither 1.0 nor 1.1, then it must
	be 1.2 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 SP4 (Microsoft
	Management Console 1.1).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
